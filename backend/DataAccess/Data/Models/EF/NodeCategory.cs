using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class NodeCategory
{
    public int Id { get; set; }
    [MaxLength(255)]
    public string Type { get; set; } = null!;
    [MaxLength(255)]
    public string Group { get; set; } = null!;
    [MaxLength(255)]
    public string Subgroup { get; set; } = null!;
    [MaxLength(255)]
    public string? Note { get; set; }
    [MaxLength(255)]
    public string Icon { get; set; } = null!;
    public int Order { get; set; }
    public bool RequireName { get; set; }
    public bool RequireAction { get; set; }
    public bool RequireTarget { get; set; }
    public bool RequirePickup { get; set; }
    public bool RequireDirection { get; set; }
    public bool Searchable { get; set; }
    public bool Collapsible { get; set; }
    // TODO Eventually get rid of these :/
    public bool ForSniperAssassin { get; set; }
    public bool ForMission { get; set; }
}