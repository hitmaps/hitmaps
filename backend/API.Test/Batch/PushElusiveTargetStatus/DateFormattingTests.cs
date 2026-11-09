using NUnit.Framework;

namespace API.Test.Batch.PushElusiveTargetStatus;

public class DateFormattingTests
{
    [Test]
    public void DateFormatTests()
    {
        var date = DateTime.UtcNow;
        Console.WriteLine(date.ToString("MMMM dd, yyyy"));
    }
}