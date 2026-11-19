using System.Text;
using API.Batch.PushElusiveTargetStatus;
using API.BusinessLogic;
using API.BusinessLogic.Authentication;
using API.BusinessLogic.Discord;
using API.BusinessLogic.Firebase;
using API.BusinessLogic.X;
using API.Controllers;
using API.Filters;
using Asp.Versioning;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using DataAccess.Data;
using Hangfire;
using Hangfire.SqlServer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi;
using Rollbar;
using Scalar.AspNetCore;

var app = Program.CreateWebApplication(args);
app.Run();

public partial class Program
{
    public static WebApplication CreateWebApplication(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddApiVersioning(options =>
        {
            options.DefaultApiVersion = new ApiVersion(1, 0);
            options.ReportApiVersions = true;
            options.AssumeDefaultVersionWhenUnspecified = true;
            options.ApiVersionReader = new HeaderApiVersionReader("x-api-version");
        });
        builder.Services.AddDbContext<HitmapsDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("Hitmaps")));
        builder.Services.AddScoped<IGameService, GameService>();
        builder.Services.AddScoped<ILocationService, LocationService>();
        builder.Services.AddScoped<IMissionService, MissionService>();
        builder.Services.AddScoped<INodeService, NodeService>();
        builder.Services.AddScoped<IDisguiseService, DisguiseService>();
        builder.Services.AddScoped<ILedgeService, LedgeService>();
        builder.Services.AddScoped<IFoliageService, FoliageService>();
        builder.Services.AddScoped<ITemplateService, TemplateService>();
        builder.Services.AddScoped<IIconService, IconService>();
        builder.Services.AddScoped<IElusiveTargetService, ElusiveTargetService>();
        builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();
        builder.Services.AddScoped<IUserService, UserService>();
        builder.Services.AddSingleton<HttpClientWrapper>();
        builder.Services.AddSingleton<IDiscordService, DiscordService>();
        builder.Services.AddSingleton<IFirebaseClient, FirebaseClient>();
        builder.Services.AddSingleton<IImageService, ImageService>();
        builder.Services.AddSingleton<MakeshiftXClient>();
        builder.Services.AddAuthentication("Bearer").AddJwtBearer(o =>
        {
            o.TokenValidationParameters = new TokenValidationParameters
            {
                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!)),
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = false,
                ValidateIssuerSigningKey = true
            };
        });
        builder.Services.AddAuthorization();
        var mvcBuilder = builder.Services.AddControllers();
        var apiAssembly = typeof(GameController).Assembly;
        if (!mvcBuilder.PartManager.ApplicationParts.OfType<AssemblyPart>().Any(part => part.Assembly == apiAssembly))
        {
            mvcBuilder.AddApplicationPart(apiAssembly);
        }
        builder.Services.AddOpenApi(options =>
        {
            options.ShouldInclude = description =>
                !description.ActionDescriptor.EndpointMetadata.OfType<IAuthorizeData>().Any();
            options.AddDocumentTransformer((document, _, _) =>
            {
                document.Info = new OpenApiInfo
                {
                    Title = "HITMAPS API",
                    Version = "v1",
                    Description =
                        "Public HITMAPS HTTP API. This document lists only endpoints that do not require authentication."
                };
                document.Servers =
                [
                    new OpenApiServer { Url = "https://api.hitmaps.com" }
                ];
                return Task.CompletedTask;
            });
        });
        builder.Services.AddCors();
        var hitmapsConnectionString = builder.Configuration.GetConnectionString("Hitmaps");
        var hangfireEnabled = !string.IsNullOrWhiteSpace(hitmapsConnectionString);
        if (hangfireEnabled)
        {
            builder.Services.AddHangfire(configuration => configuration
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseFilter(new AutomaticRetryAttribute { Attempts = 0 })
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                .UseSqlServerStorage(hitmapsConnectionString, new SqlServerStorageOptions
                {
                    CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                    SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                    QueuePollInterval = TimeSpan.Zero,
                    UseRecommendedIsolationLevel = true,
                    DisableGlobalLocks = true,
                    SchemaName = "Hangfire"
                }));
            builder.Services.AddHangfireServer();
        }

        /*ConfigureRollbarInfrastructure();
        builder.Services.AddRollbarLogger(loggerOptions =>
        {
            loggerOptions.Filter =
                (_, loglevel) => loglevel >= LogLevel.Warning;
        });*/

        var app = builder.Build();

        app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().WithExposedHeaders("*"));

        // The OpenAPI document stays available after deploy so Mintlify can fetch it.
        // Scalar is the local docs UI. Swagger UI is not used.
        app.MapOpenApi();
        if (app.Environment.IsDevelopment())
        {
            app.MapScalarApiReference(endpointPrefix: "/docs/");
        }

        if (hangfireEnabled)
        {
            app.UseHangfireDashboard(options: new DashboardOptions
            {
                IsReadOnlyFunc = _ => true,
                Authorization = new []
                {
                    new AllowAllHangfireFilter()
                }
            });
        }

        // Apply EF migrations if in production, as we use command line otherwise
        if (app.Environment.IsProduction())
        {
            using var scope = app.Services.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<HitmapsDbContext>();
            db.Database.Migrate();
            app.UseExceptionHandler("/error");

            // Hangfire jobs
            var firebaseClient = scope.ServiceProvider.GetRequiredService<IFirebaseClient>();
            var imageService = scope.ServiceProvider.GetRequiredService<IImageService>();
            var makeshiftXClient = scope.ServiceProvider.GetRequiredService<MakeshiftXClient>();
            RecurringJob.AddOrUpdate("hitmaps:Batch.PushElusiveTargetStatus",
                () => new PushElusiveTargetStatus(db, builder.Configuration, firebaseClient, imageService, makeshiftXClient).ProgramLogicAsync(),
                Cron.Hourly);
        }

        app.UseForwardedHeaders(new ForwardedHeadersOptions
        {
            ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
        });

        app.UseAuthentication();
        app.UseAuthorization();

        app.MapControllers();

        return app;

        void ConfigureRollbarInfrastructure()
        {
            RollbarInfrastructureConfig config = new RollbarInfrastructureConfig(
                builder.Configuration["RollbarAccessToken"],
                builder.Configuration["RollbarEnvironment"]
            );
            RollbarDataSecurityOptions dataSecurityOptions = new RollbarDataSecurityOptions();
            dataSecurityOptions.ScrubFields = new[]
            {
                "url",
                "method",
            };
            config.RollbarLoggerConfig.RollbarDataSecurityOptions.Reconfigure(dataSecurityOptions);

            RollbarInfrastructure.Instance.Init(config);
        }
    }
}
