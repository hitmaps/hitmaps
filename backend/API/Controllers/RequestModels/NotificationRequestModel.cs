namespace API.Controllers.RequestModels;

public class NotificationRequestModel
{
    public const string StateSubscribing = "SUBSCRIBING";
    public const string StateUnsubscribing = "UNSUBSCRIBING";
    public string State { get; set; } = null!;
    public string Topic { get; set; } = null!;
    public string Token { get; set; } = null!;

    public bool IsStateValid()
    {
        // ReSharper disable once MergeIntoLogicalPattern
        return State == StateSubscribing || State == StateUnsubscribing;
    }
}