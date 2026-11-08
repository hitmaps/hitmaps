using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class GameViewModel
{
    public int Id { get; set; }
    public string Slug { get; set; } = null!;
    public string FullName { get; set; } = null!;
    public string? Tagline { get; set; }
    public string Type { get; set; } = null!;
    public string Icon { get; set; } = null!;
    public string TileUrl { get; set; } = null!;
    public string LogoUrl { get; set; } = null!;

    public static GameViewModel FromDbModel(Game game)
    {
        return new GameViewModel
        {
            Id = game.Id,
            Slug = game.Slug,
            FullName = game.FullName,
            Tagline = game.Tagline,
            Type = game.Type,
            Icon = game.Icon,
            TileUrl = game.TileUrl,
            LogoUrl = game.LogoUrl
        };
    }
}