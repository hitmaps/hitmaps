namespace API.BusinessLogic.Firebase;

public interface IFirebaseClient
{
    Task SubscribeToTopicAsync(string topic, string token);
    Task UnsubscribeFromTopicAsync(string topic, string token);
    Task SendElusiveTargetMessageAsync(string topic, ElusiveTargetPush pushContents);
}