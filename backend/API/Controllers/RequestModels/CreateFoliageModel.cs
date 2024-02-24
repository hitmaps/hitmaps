namespace API.Controllers.RequestModels;

public class CreateFoliageModel
{
    public int MissionId { get; set; }
    public int Level { get; set; }
    public List<string> Vertices { get; set; } = new();
}