using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class DisguiseAreaViewModel
{
    public int Id { get; set; }
    public int DisguiseId { get; set; }
    public int Level { get; set; }
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