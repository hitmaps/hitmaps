using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class MissionVariant
{
    public int Id { get; set; }
    public Mission Mission { get; set; } = null!;
    [MaxLength(255)]
    public string Name { get; set; } = null!;
    public bool Visible { get; set; }
    [MaxLength(255)]
    public string Icon { get; set; } = null!;
    [MaxLength(255)]
    public string Slug { get; set; } = null!;
    public bool Default { get; set; }
    [MaxLength(255)]
    public string TileUrl { get; set; } = null!;
    public bool ShowOnLocationsScreen { get; set; }
    public List<Node> Nodes { get; set; } = new();
}