using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class FoliageViewModel
{
    public int Id { get; set; }
    public int MissionId { get; set; }
    public int Level { get; set; }
    public List<string> Vertices { get; set; } = new();

    public static FoliageViewModel FromDbModel(Foliage foliage)
    {
        return new FoliageViewModel
        {
            Id = foliage.Id,
            MissionId = foliage.Mission.Id,
            Level = foliage.Level,
            Vertices = foliage.Vertices.Select(x => $"{x.Latitude},{x.Longitude}").ToList()
        };
    }
}