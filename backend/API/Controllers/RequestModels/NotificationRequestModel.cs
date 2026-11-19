namespace API.Controllers.RequestModels;

public class NotificationRequestModel
{
    public const string StateSubscribing = "SUBSCRIBING";
    public const string StateUnsubscribing = "UNSUBSCRIBING";
    /// <summary><c>SUBSCRIBING</c> to opt in, or <c>UNSUBSCRIBING</c> to opt out.</summary>
    public string State { get; set; } = null!;

    /// <summary>Firebase topic name.</summary>
    public string Topic { get; set; } = null!;

    /// <summary>Firebase device token.</summary>
    public string Token { get; set; } = null!;

    public bool IsStateValid()
    {
        // ReSharper disable once MergeIntoLogicalPattern
        return State == StateSubscribing || State == StateUnsubscribing;
    }
}