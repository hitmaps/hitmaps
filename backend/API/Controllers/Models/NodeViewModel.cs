using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class NodeViewModel
{
    public int Id { get; set; }
    public int MissionId { get; set; }
    public string Type { get; set; } = null!;
    public string Icon { get; set; } = null!;
    public string? Name { get; set; }
    public string? Target { get; set; }
    public int Level { get; set; }
    public string Latitude { get; set; } = null!;
    public string Longitude { get; set; } = null!;
    public string Group { get; set; } = null!;
    public string Subgroup { get; set; } = null!;
    public List<NodeNoteViewModel> Notes = new();
    public string? Image { get; set; }
    public int Quantity { get; set; }
    public bool Searchable { get; set; }
    public List<int> Variants { get; set; } = new();

    public static NodeViewModel FromDbModel(Node node)
    {
        return new NodeViewModel
        {
            Id = node.Id,
            MissionId = node.Mission.Id,
            Type = node.Type,
            Icon = node.Icon,
            Name = node.Name,
            Target = node.Target,
            Level = node.Level,
            Latitude = node.Latitude,
            Longitude = node.Longitude,
            Group = node.Group,
            Subgroup = node.Subgroup,
            Notes = node.Notes.Select(NodeNoteViewModel.FromDbModel).ToList(),
            Image = node.Image,
            Quantity = node.Quantity,
            Searchable = node.Searchable,
            Variants = node.Variants.Select(x => x.Id).ToList()
        };
    }
}