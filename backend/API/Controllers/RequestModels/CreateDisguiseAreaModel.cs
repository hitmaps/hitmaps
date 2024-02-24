namespace API.Controllers.RequestModels;

public class CreateDisguiseAreaModel
{
    public int MissionId { get; set; }
    public int DisguiseId { get; set; }
    public int Level { get; set; }
    public string Type { get; set; } = null!;
    public List<string> Vertices { get; set; } = new();
}