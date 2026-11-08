using FirebaseAdmin;
using FirebaseAdmin.Messaging;
using Google.Apis.Auth.OAuth2;

namespace API.BusinessLogic.Firebase;

public class FirebaseClient : IFirebaseClient
{
    private FirebaseApp app;
    
    public FirebaseClient(IConfiguration configuration)
    {
        app = FirebaseApp.Create(new AppOptions
        {
            Credential = GoogleCredential.FromJson(configuration["FirebaseServiceAccountJson"])
        });
    }


    public async Task SubscribeToTopicAsync(string topic, string token)
    {
        await FirebaseMessaging.DefaultInstance.SubscribeToTopicAsync(new List<string> { token }, topic);
    }

    public async Task UnsubscribeFromTopicAsync(string topic, string token)
    {
        await FirebaseMessaging.DefaultInstance.UnsubscribeFromTopicAsync(new List<string> { token }, topic);
    }

    public async Task SendElusiveTargetMessageAsync(string topic, ElusiveTargetPush pushContents)
    {
        var webPushConfig = new WebpushConfig
        {
            Notification = new WebpushNotification
            {
                Title = pushContents.Title,
                Body = pushContents.Body,
                Icon = pushContents.IconUrl,
                Image = pushContents.ImageUrl
            }
        };

        await FirebaseMessaging.DefaultInstance.SendAsync(new Message
        {
            Topic = topic,
            Webpush = webPushConfig
        });
    }
}