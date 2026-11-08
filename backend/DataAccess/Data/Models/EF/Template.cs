using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class Template
{
    public int Id { get; set; }
    [MaxLength(255)]
    public string Name { get; set; } = null!;
    [MaxLength(255)]
    public string? Target { get; set; }
    [MaxLength(255)]
    public string? Description { get; set; }
    [MaxLength(255)]
    public string Type { get; set; } = null!;
    [MaxLength(255)]
    public string Group { get; set; } = null!;
    [MaxLength(255)]
    public string Subgroup { get; set; } = null!;
    [MaxLength(255)]
    public string? Requirement { get; set; }
    [MaxLength(255)]
    public string? Warning { get; set; }
    [MaxLength(255)]
    public string? Information { get; set; }
    [MaxLength(255)]
    public string Icon { get; set; } = null!;
    public bool Searchable { get; set; }
    [MaxLength(255)]
    public string? Image { get; set; }
}