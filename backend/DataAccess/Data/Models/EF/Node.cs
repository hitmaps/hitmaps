using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class Node
{
    public int Id { get; set; }
    public Mission Mission { get; set; } = null!;
    [MaxLength(255)]
    public string Type { get; set; } = null!;
    [MaxLength(255)]
    public string Subgroup { get; set; } = null!;
    [MaxLength(255)]
    public string? Name { get; set; }
    [MaxLength(255)]
    public string? Target { get; set; }
    public int Level { get; set; }
    [MaxLength(30)]
    public string Latitude { get; set; } = null!;
    [MaxLength(30)]
    public string Longitude { get; set; } = null!;
    [MaxLength(255)]
    public string Group { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    [MaxLength(50)]
    public string Icon { get; set; } = null!;
    public bool Searchable { get; set; }
    [MaxLength(255)]
    public string? Image { get; set; }
    public int Quantity { get; set; }
    public int? PassageDestinationFloor { get; set; }
    public List<MissionVariant> Variants { get; set; } = new();
    public List<NodeNote> Notes { get; set; } = new();
}