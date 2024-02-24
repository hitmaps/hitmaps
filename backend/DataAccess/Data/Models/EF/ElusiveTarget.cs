using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class ElusiveTarget
{
    public int Id { get; set; }
    public Mission Mission { set; get; } = null!;
    [MaxLength(255)]
    public string Name { get; set; } = null!;
    public string? Briefing { get; set; }
    [MaxLength(255)]
    public string? VideoBriefingUrl { get; set; }
    public DateTime BeginsAt { get; set; }
    public DateTime EndsAt { get; set; }
    [MaxLength(255)]
    public string ImageUrl { get; set; } = null!;
    public bool ComingNotificationSent { get; set; }
    public bool PlayableNotificationSent { get; set; }
    public bool SevenDaysLeftNotificationSent { get; set; }
    public bool FiveDaysLeftNotificationSent { get; set; }
    public bool ThreeDaysLeftNotificationSent { get; set; }
    public bool OneDayLeftNotificationSent { get; set; }
    public bool EndNotificationSent { get; set; }
    public bool Reactivated { get; set; }
}