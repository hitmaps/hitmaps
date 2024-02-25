using API.BusinessLogic.Firebase;
using Microsoft.Extensions.Configuration;
using NUnit.Framework;

namespace API.Test.BusinessLogic.Firebase;

public class FirebaseClientTests
{
    private readonly FirebaseClient client;
    private readonly IConfiguration configuration;

    public FirebaseClientTests()
    {
        configuration = new ConfigurationBuilder()
            .AddUserSecrets<FirebaseClientTests>()
            .Build();
        client = new FirebaseClient(configuration);
    }

    [SetUp]
    public void SetUp()
    {
        if (configuration.GetValue<string>("FirebaseServiceAccountJson") == null)
        {
            Assert.Inconclusive("A Firebase service account JSON, which is needed, was not found.");
        }
    }

    [Test]
    public async Task ItCanSubscribeToTopics()
    {
        var topic = "UNIT-TEST-TOPIC";
        var token = "UNKNOWN";

        await client.SubscribeToTopicAsync(topic, token);
    }

    [Test]
    public async Task ItCanUnsubscribeFromTopics()
    {
        var topic = "UNIT-TEST-TOPIC";
        var token = "UNKNOWN";

        await client.UnsubscribeFromTopicAsync(topic, token);
    }

    [Test]
    public async Task ItCanSendMessagesToTopics()
    {
        if (configuration.GetValue<string>("FirebaseToken") == null)
        {
            Assert.Ignore("No FirebaseToken provided.");
        }
        
        var topic = "UNIT-TEST-TOPIC";
        var token = configuration["FirebaseToken"]!;

        await client.SubscribeToTopicAsync(topic, token);
        await client.SendElusiveTargetMessageAsync(topic, new ElusiveTargetPush
        {
            Body = "Test message...hopefully this isn't broadcasted to everyone ;)",
            IconUrl = "https://media.hitmaps.com/img/hitmaps-custom/mk3.png",
            ImageUrl = "https://media.hitmaps.com/img/hitman3/actors/elusive-targets/coming-soon.jpg",
            MapUrl = "#",
            Title = "TEST MESSAGE"
        });
        await client.UnsubscribeFromTopicAsync(topic, token);
    }
}