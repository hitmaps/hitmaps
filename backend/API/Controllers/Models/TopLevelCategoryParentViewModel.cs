using System.Text.Json.Serialization;

namespace API.Controllers.Models;

public class TopLevelCategoryParentViewModel<T>
{
    [JsonPropertyName("Weapons and Tools")]
    public List<T> WeaponsAndTools { get; set; } = new();
    [JsonPropertyName("Points of Interest")]
    public List<T> PointsOfInterest { get; set; } = new();
    public List<T> Navigation { get; set; } = new();
}