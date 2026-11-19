using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

/// <summary>A ledge polygon on a mission map.</summary>
public class LedgeViewModel
{
    public int Id { get; set; }
    public int MissionId { get; set; }
    public int Level { get; set; }
    /// <summary>Polygon corners as <c>latitude,longitude</c> strings.</summary>
    public List<string> Vertices { get; set; } = new();

    public static LedgeViewModel FromDbModel(Ledge ledge)
    {
        return new LedgeViewModel
        {
            Id = ledge.Id,
            MissionId = ledge.Mission.Id,
            Level = ledge.Level,
            Vertices = ledge.Vertices.Select(x => $"{x.Latitude},{x.Longitude}").ToList()
        };
    }
}