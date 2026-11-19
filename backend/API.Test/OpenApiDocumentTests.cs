using System.Text.Json;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi;
using NUnit.Framework;

namespace API.Test;

public class OpenApiDocumentTests
{
    [Test]
    public async Task PublicDocumentOmitsAuthorizedEndpointsAndDescribesResponses()
    {
        await using var app = Program.CreateWebApplication(["--environment", "Development"]);
        await app.StartAsync();
        var provider = app.Services.GetRequiredKeyedService<IOpenApiDocumentProvider>("v1");
        var document = await provider.GetOpenApiDocumentAsync(CancellationToken.None);

        await using var stream = new MemoryStream();
        await using var textWriter = new StreamWriter(stream, leaveOpen: true);
        var writer = new OpenApiJsonWriter(textWriter);
        document.SerializeAs(OpenApiSpecVersion.OpenApi3_0, writer);
        await textWriter.FlushAsync();
        stream.Position = 0;
        using var parsed = await JsonDocument.ParseAsync(stream);
        var root = parsed.RootElement;

        Assert.That(root.GetProperty("info").GetProperty("title").GetString(), Is.EqualTo("HITMAPS API"));
        Assert.That(root.GetProperty("servers")[0].GetProperty("url").GetString(), Is.EqualTo("https://api.hitmaps.com"));

        var paths = root.GetProperty("paths");
        var pathNames = paths.EnumerateObject().Select(path => path.Name).ToList();
        Assert.That(pathNames, Does.Contain("/api/games"));
        Assert.That(pathNames, Does.Contain("/api/games/{game}/locations/{location}/missions/{mission}/nodes"));
        Assert.That(pathNames, Does.Not.Contain("/api/web/home"));
        Assert.That(pathNames, Does.Not.Contain("/api/web/user/login"));
        Assert.That(pathNames, Does.Not.Contain("/api/notifications"));
        Assert.That(pathNames.Any(path => path.StartsWith("/api/web", StringComparison.OrdinalIgnoreCase)), Is.False);
        Assert.That(pathNames, Does.Not.Contain("/api/nodes"));
        Assert.That(pathNames, Does.Not.Contain("/api/disguise-areas"));
        Assert.That(pathNames, Does.Not.Contain("/api/disguise-areas/copy"));
        Assert.That(pathNames, Does.Not.Contain("/api/foliage"));
        Assert.That(pathNames, Does.Not.Contain("/api/ledges"));
        Assert.That(pathNames, Does.Not.Contain("/error"));

        var gamesGet = paths.GetProperty("/api/games").GetProperty("get");
        Assert.That(gamesGet.GetProperty("summary").GetString(), Is.EqualTo("Lists published HITMAPS games."));
        var okSchema = gamesGet.GetProperty("responses").GetProperty("200").GetProperty("content")
            .GetProperty("application/json").GetProperty("schema");
        Assert.That(okSchema.GetProperty("type").GetString(), Is.EqualTo("array"));

        var schemas = root.GetProperty("components").GetProperty("schemas");
        Assert.That(schemas.TryGetProperty("GameViewModel", out var gameSchema), Is.True, "schema names: " + string.Join(", ", schemas.EnumerateObject().Select(schema => schema.Name)));
        Assert.That(gameSchema.GetProperty("description").GetString(), Does.Contain("HITMAPS game"));
        Assert.That(gameSchema.GetProperty("properties").TryGetProperty("slug", out _), Is.True);
        Assert.That(schemas.TryGetProperty("CreateEditNodeModel", out _), Is.False);
        Assert.That(schemas.TryGetProperty("LoginModel", out _), Is.False);
        Assert.That(schemas.TryGetProperty("NotificationRequestModel", out _), Is.False);
    }
}
