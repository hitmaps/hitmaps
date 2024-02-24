using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data.Models.EF;

public class Mission
{
    public const string MissionTypeSniperAssassin = "sniper-assassin";
    
    public int Id { get; set; }
    public Location Location { get; set; } = null!;
    [MaxLength(100)]
    public string Name { get; set; } = null!;
    [MaxLength(100)]
    public string Slug { get; set; } = null!;
    public int Order {get; set; }
    [MaxLength(100)]
    public string MapFolderName { get; set; } = null!;
    [MaxLength(30)] 
    public string MapCenterLatitude { get; set; } = null!;
    [MaxLength(30)] 
    public string MapCenterLongitude { get; set; } = null!;
    public int LowestFloorNumber { get; set; }
    public int HighestFloorNumber { get; set; }
    public int StartingFloorNumber { get; set; }
    [MaxLength(30)]
    public string TopLeftCoordinateLatitude { get; set; } = null!;
    [MaxLength(30)]
    public string TopLeftCoordinateLongitude { get; set; } = null!;
    [MaxLength(30)]
    public string BottomRightCoordinateLatitude { get; set; } = null!;
    [MaxLength(30)]
    public string BottomRightCoordinateLongitude { get; set; } = null!;
    public bool SatelliteView { get; set; }
    public DateTime? AvailableAt { get; set; }
    public DateTime? ExpiresAt { get; set; }
    [MaxLength(50)]
    public string MissionType { get; set; } = null!;
    [MaxLength(255)]
    public string TileUrl { get; set; } = null!;
    [MaxLength(255)]
    public string BackgroundUrl { get; set; } = null!;
    public bool Svg { get; set; }
    public int MinZoom { get; set; }
    public int MaxZoom { get; set; }
    [MaxLength(30)]
    public string BoundingBoxTopLeftLatitude { get; set; } = null!;
    [MaxLength(30)]
    public string BoundingBoxTopLeftLongitude { get; set; } = null!;
    [MaxLength(30)]
    public string BoundingBoxBottomRightLatitude { get; set; } = null!;
    [MaxLength(30)]
    public string BoundingBoxBottomRightLongitude { get; set; } = null!;

    public List<MissionVariant> Variants { get; set; } = new();
    public List<FloorName> FloorNames { get; set; } = new();
}