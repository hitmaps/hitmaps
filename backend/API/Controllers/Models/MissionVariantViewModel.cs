using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

/// <summary>One way to play a mission, such as the main story or Freelancer.</summary>
public class MissionVariantViewModel
{
    public int Id { get; set; }
    public int MissionId { get; set; }
    public string Name { get; set; } = null!;
    public bool Visible { get; set; }
    public string Icon { get; set; } = null!;
    public string Slug { get; set; } = null!;
    public bool Default { get; set; }
    public string TileUrl { get; set; } = null!;
    public bool ShowOnLocationsScreen { get; set; }

    public static MissionVariantViewModel FromDbModel(MissionVariant variant)
    {
        return new MissionVariantViewModel
        {
            Id = variant.Id,
            MissionId = variant.Mission.Id,
            Name = variant.Name,
            Visible = variant.Visible,
            Icon = variant.Icon,
            Slug = variant.Slug,
            Default = variant.Default,
            TileUrl = variant.TileUrl,
            ShowOnLocationsScreen = variant.ShowOnLocationsScreen
        };
    }
}