using API.Extensions;
using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class ElusiveTargetViewModel
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string MissionUrl { get; set; } = null!;
    public string? Briefing { get; set; }
    public string? VideoBriefingUrl { get; set; }
    public string BeginningTime { get; set; } = null!;
    public string EndingTime { get; set; } = null!;
    public string TileUrl { get; set; } = null!;
    public bool Reactivated { get; set; }

    public static ElusiveTargetViewModel FromDbModel(ElusiveTarget elusiveTarget)
    {
        return new ElusiveTargetViewModel
        {
            Id = elusiveTarget.Id,
            Name = elusiveTarget.Name,
            MissionUrl =
                $"/games/{elusiveTarget.Mission.Location.Game.Slug}/{elusiveTarget.Mission.Location.Slug}/{elusiveTarget.Mission.Slug}",
            Briefing = elusiveTarget.Briefing,
            VideoBriefingUrl = elusiveTarget.VideoBriefingUrl,
            BeginningTime = elusiveTarget.BeginsAt.ToApiDateTimeFormat(),
            EndingTime = elusiveTarget.EndsAt.ToApiDateTimeFormat(),
            TileUrl = elusiveTarget.ImageUrl,
            Reactivated = elusiveTarget.Reactivated
        };
    }
}