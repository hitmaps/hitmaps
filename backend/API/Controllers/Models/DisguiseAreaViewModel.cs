using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

/// <summary>A map polygon that marks where a disguise is allowed or illegal.</summary>
public class DisguiseAreaViewModel
{
    public int Id { get; set; }
    public int DisguiseId { get; set; }
    public int Level { get; set; }
    /// <summary>Polygon corners as <c>latitude,longitude</c> strings.</summary>
    public List<string> Vertices { get; set; } = new();
    public string Type { get; set; } = null!;

    public static DisguiseAreaViewModel FromDbModel(DisguiseArea disguiseArea)
    {
        return new DisguiseAreaViewModel
        {
            Id = disguiseArea.Id,
            DisguiseId = disguiseArea.Disguise.Id,
            Level = disguiseArea.Level,
            Type = disguiseArea.Type,
            Vertices = disguiseArea.Vertices.Select(x => $"{x.Latitude},{x.Longitude}").ToList()
        };
    }
}