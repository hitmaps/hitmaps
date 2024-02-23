using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class LedgeViewModel
{
    public int Id { get; set; }
    public int MissionId { get; set; }
    public int Level { get; set; }
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