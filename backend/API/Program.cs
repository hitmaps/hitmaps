using System.Text;
using API.BusinessLogic;
using API.BusinessLogic.Authentication;
using API.BusinessLogic.Discord;
using API.BusinessLogic.Firebase;
using API.BusinessLogic.X;
using DataAccess.Data;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

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
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = false,
        ValidateIssuerSigningKey = true
    };
});
builder.Services.AddAuthorization();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().WithExposedHeaders("*"));

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Apply EF migrations if in production, as we use command line otherwise
if (app.Environment.IsProduction())
{
    using var scope = app.Services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<HitmapsDbContext>();
    db.Database.Migrate();
    app.UseExceptionHandler("/error");
}

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();