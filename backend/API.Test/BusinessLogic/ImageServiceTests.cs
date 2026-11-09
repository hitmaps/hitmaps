using API.BusinessLogic;
using Microsoft.Extensions.Configuration;
using NUnit.Framework;

namespace API.Test.BusinessLogic;

public class ImageServiceTests
{
    private readonly ImageService imageService;
    private readonly IConfiguration configuration;

    public ImageServiceTests()
    {
        configuration = new ConfigurationBuilder()
            .AddUserSecrets<ImageServiceTests>()
            .Build();
        imageService = new ImageService(configuration);
    }

    [SetUp]
    public void SetUp()
    {
        if (configuration.GetValue<string>("MediaLibraryRoot") == null)
        {
            Assert.Inconclusive("MediaLibaryRoot configuration value not set.");
        }
    }

    [Test]
    public void ItCanGenerateACompositeEtImage()
    {
        imageService.BuildCompositeEtImage("img/hitman3/actors/elusive-targets/hitman3/the-drop.jpg",
            "7-days-remaining.png",
            "the-drop-7.png");
    }
}