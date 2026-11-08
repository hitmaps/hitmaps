namespace API.Controllers.RequestModels.Nodes;

public class CategoryModel
{
    public string Group { get; set; } = null!;
    public string Subgroup { get; set; } = null!;
    public string Type { get; set; } = null!;
    public bool Searchable { get; set; }
}