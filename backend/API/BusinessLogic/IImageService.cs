namespace API.BusinessLogic;

public interface IImageService
{
    void BuildCompositeEtImage(string basePath, string overlayPath, string compositeName);
}