namespace API.Controllers.Models;

public class MissionNodesViewModel
{
    public List<string> TopLevelCategories { get; private set; } = new()
    {
        "Points of Interest",
        "Weapons and Tools",
        "Navigation"
    };

    public List<NodeViewModel> Nodes { get; set; } = new();
    public List<object> Categories { get; set; } = new();
}