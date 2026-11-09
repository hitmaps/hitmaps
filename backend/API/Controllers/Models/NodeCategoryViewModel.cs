using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class NodeCategoryViewModel
{
    public int Id { get; set; }
    public string Type { get; set; } = null!;
    public string Group { get; set; } = null!;
    public string Subgroup { get; set; } = null!;
    public string? Note { get; set; }
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

    public static NodeCategoryViewModel FromDbModel(NodeCategory nodeCategory)
    {
        return new NodeCategoryViewModel
        {
            Id = nodeCategory.Id,
            Type = nodeCategory.Type,
            Group = nodeCategory.Group,
            Subgroup = nodeCategory.Subgroup,
            Note = nodeCategory.Note,
            Icon = nodeCategory.Icon,
            Order = nodeCategory.Order,
            RequireName = nodeCategory.RequireName,
            RequireAction = nodeCategory.RequireAction,
            RequireTarget = nodeCategory.RequireTarget,
            RequirePickup = nodeCategory.RequirePickup,
            RequireDirection = nodeCategory.RequireDirection,
            Searchable = nodeCategory.Searchable,
            Collapsible = nodeCategory.Collapsible,
            ForSniperAssassin = nodeCategory.ForSniperAssassin,
            ForMission = nodeCategory.ForMission
        };
    }
}