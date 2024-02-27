using System.Diagnostics.CodeAnalysis;
using DataAccess.Data.Models.EF;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;

namespace API.BusinessLogic;

[SuppressMessage("ReSharper", "AccessToDisposedClosure")]
public class ImageService : IImageService
{
    private readonly string mediaLibraryRoot;

    public ImageService(IConfiguration configuration)
    {
        mediaLibraryRoot = configuration["MediaLibraryRoot"];
    }
    
    public string BuildCompositeEtImage(string basePath, string overlayPath, string compositeName)
    {
        var fullCompositePath = Path.Join(GetPathParts($"{mediaLibraryRoot}/img/hitmaps-custom/elusive-target-overlays/composites/{compositeName}"));
        if (File.Exists(fullCompositePath))
        {
            // Nothing to do; composite already exists
            return fullCompositePath;
        }

        var fullBasePath = Path.Join(GetPathParts($"{mediaLibraryRoot}/{basePath}"));
        var fullOverlayPath = Path.Join(GetPathParts($"{mediaLibraryRoot}/img/hitmaps-custom/elusive-target-overlays/{overlayPath}"));
        VerifyPath(fullBasePath);
        VerifyPath(fullOverlayPath);

        using var img1 = Image.Load<Rgba32>(fullBasePath);
        using var img2 = Image.Load<Rgba32>(fullOverlayPath);
        using var output = new Image<Rgba32>(693, 517);
        output.Mutate(o => o
            .DrawImage(img1, new Point(0,0), 1f)
            .DrawImage(img2, new Point(0,0), 1f));
        
        output.Save(fullCompositePath);
        return fullCompositePath;
    }

    private static string[] GetPathParts(string path)
    {
        var reappendFrontSlash = path[0] == '/';
        var parts = path.Split("/");
        if (reappendFrontSlash)
        {
            parts[0] = $"/{parts[0]}";
        }

        return parts;
    }

    private static void VerifyPath(string path)
    {
        if (File.Exists(path))
        {
            return;
        }

        throw new Exception($"Could not find path: {path}");
    }

    public string BuildOgImage(Mission mission)
    {
        var fullCompositePath = Path.Join(GetPathParts($"{mediaLibraryRoot}/img/hitmaps-custom/mission-ogimages/{mission.Slug}{mission.Id}.png"));
        if (File.Exists(fullCompositePath))
        {
            // Nothing to do; composite already exists
            return fullCompositePath;
        }

        //mediaLibraryRoot
        var fullBasePath = Path.Join(GetPathParts(mission.BackgroundUrl.Replace("https://media.hitmaps.com", mediaLibraryRoot)));
        var fullOverlayPath = Path.Join(GetPathParts($"{mediaLibraryRoot}/img/hitmaps-custom/ogimage-overlay.png"));
        VerifyPath(fullBasePath);
        VerifyPath(fullOverlayPath);

        using var img1 = Image.Load<Rgba32>(fullBasePath);
        using var img2 = Image.Load<Rgba32>(fullOverlayPath);
        using var output = new Image<Rgba32>(1920, 1080);
        output.Mutate(o => o
            .DrawImage(img1, new Point(0,0), 1f)
            .DrawImage(img2, new Point(0,0), 1f));
        
        output.Save(fullCompositePath);
        return fullCompositePath;
    }
}