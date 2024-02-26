namespace API.BusinessLogic;

public interface IImageService
{
    string BuildCompositeEtImage(string basePath, string overlayPath, string compositeName);
}