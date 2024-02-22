using API.BusinessLogic;
using DataAccess.Data;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.EntityFrameworkCore;

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
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

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

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();