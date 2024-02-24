namespace API.Controllers.RequestModels.Nodes;

public class CreateEditNodeModel
{
    public int MissionId { get; set; }
    public CategoryModel Category { get; set; } = null!;
    public string Icon { get; set; } = null!;
    public decimal Latitude { get; set; }
    public decimal Longitude { get; set; }
    public int Level { get; set; }
    public string? Name { get; set; }
    public string? TargetAction { get; set; }
    public string? Image { get; set; }
    public int? Quantity { get; set; }
    public List<int> VariantIds { get; set; } = new();
    public List<NoteModel> Notes { get; set; } = new();
}