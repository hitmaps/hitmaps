using System.Text.Json.Serialization;

namespace API.Controllers.Models;

public class TemplateParentViewModel
{
    [JsonPropertyName("Weapons and Tools")]
    public List<TemplateViewModel> WeaponsAndTools { get; set; } = new();
    [JsonPropertyName("Points of Interest")]
    public List<TemplateViewModel> PointsOfInterest { get; set; } = new();
    public List<TemplateViewModel> Navigation { get; set; } = new();
}