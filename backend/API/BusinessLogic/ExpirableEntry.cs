namespace API.BusinessLogic;

public class ExpirableEntry<T>
{
    public readonly DateTime RetrievedAt;
    public readonly T Value;
    public readonly TimeSpan AliveFor;

    public ExpirableEntry(T value, TimeSpan aliveFor)
    {
        RetrievedAt = DateTime.UtcNow;
        Value = value;
        AliveFor = aliveFor;
    }

    public bool IsExpired()
    {
        return RetrievedAt.Add(AliveFor) < DateTime.UtcNow;
    }
}