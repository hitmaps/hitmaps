namespace DataAccess.Data.Models.EF;

public class Mission
{
    public int Id { get; set; }
    public Location Location { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string Slug { get; set; } = null!;
    public int Order {get; set; }
    public string MapFolderName { get; set; } = null!;
    public string MapCenterLatitude { get; set; } = null!;
    public string MapCenterLongitude { get; set; } = null!;
    public int LowestFloorNumber { get; set; }
    public int HighestFloorNumber { get; set; }
    public int StartingFloorNumber { get; set; }
    public decimal TopLeftCoordinateLatitude { get; set; }
    public decimal TopLeftCoordinateLongitude { get; set; }
    public decimal BottomRightCoordinateLatitude { get; set; }
    public decimal BottomRightCoordinateLongitude { get; set; }
    public bool SatelliteView { get; set; }
    public DateTime? AvailableAt { get; set; }
    public DateTime? ExpiresAt { get; set; }
    public string MissionType { get; set; } = null!;
    public string TileUrl { get; set; } = null!;
    public string BackgroundUrl { get; set; } = null!;
    public bool Svg { get; set; }
    public int MinZoom { get; set; }
    public int MaxZoom { get; set; }
    public decimal BoundingBoxTopLeftLatitude { get; set; }
    public decimal BoundingBoxTopLeftLongitude { get; set; }
    public decimal BoundingBoxBottomRightLatitude { get; set; }
    public decimal BoundingBoxBottomRightLongitude { get; set; }
}