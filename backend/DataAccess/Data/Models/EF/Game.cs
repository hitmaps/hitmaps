namespace DataAccess.Data.Models.EF;

public class Game
{
    public int Id { get; set; }
    public string Slug { get; set; } = null!;
    public string FullName { get; set; } = null!;
    public string? Tagline { get; set; }
    public string Type { get; set; } = null!;
    public string Icon { get; set; } = null!;
    public string TileUrl { get; set; } = null!;
    public string LogoUrl { get; set; } = null!;
}