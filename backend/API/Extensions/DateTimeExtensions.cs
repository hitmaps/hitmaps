namespace API.Extensions;

public static class DateTimeExtensions
{
    public static string ToApiDateTimeFormat(this DateTime dateTime)
    {
        return dateTime.ToString("yyyy-MM-ddTHH:mm:ssZ");
    }
}