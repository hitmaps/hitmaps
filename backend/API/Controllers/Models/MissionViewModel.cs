using API.Extensions;
using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class MissionViewModel
{
    public int Id { get; set; }
    public int LocationId { get; set; }
    public LocationViewModel Location { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string Slug { get; set; } = null!;
    public int Order { get; set; }
    public string MapFolderName { get; set; } = null!;
    public string MapCenterLatitude { get; set; } = null!;
    public string MapCenterLongitude { get; set; } = null!;
    public int LowestFloorNumber { get; set; }
    public int HighestFloorNumber { get; set; }
    public int StartingFloorNumber { get; set; }
    [Obsolete("Use TopLeftCoordinateLatitude/Longitude instead")]
    public string TopLeftCoordinate { get; set; } = null!;
    public string TopLeftCoordinateLatitude { get; set; } = null!;
    public string TopLeftCoordinateLongitude { get; set; } = null!;
    [Obsolete("Use BottomRightCoordinateLatitude/Longitude instead")]
    public string BottomRightCoordinate { get; set; } = null!;
    public string BottomRightCoordinateLatitude { get; set; } = null!;
    public string BottomRightCoordinateLongitude { get; set; } = null!;
    public bool SatelliteView { get; set; }
    public string? BeginEffectiveDate { get; set; }
    public string? EndEffectiveDate { get; set; }
    public string MissionType { get; set; } = null!;
    public List<MissionVariantViewModel> Variants { get; set; } = new();
    public string BackgroundUrl { get; set; } = null!;
    public string TileUrl { get; set; } = null!;
    public bool Svg { get; set; }
    public int MinZoom { get; set; }
    public int MaxZoom { get; set; }
    [Obsolete("Use BoundingBoxTopLeftCoordinateLatitude/Longitude instead")]
    public string BoundingBoxTopLeft { get; set; } = null!;
    public string BoundingBoxTopLeftLatitude { get; set; } = null!;
    public string BoundingBoxTopLeftLongitude { get; set; } = null!;
    [Obsolete("Use BoundingBoxBottomRightCoordinateLatitude/Longitude instead")]
    public string BoundingBoxBottomRight { get; set; } = null!;
    public string BoundingBoxBottomRightLatitude { get; set; } = null!;
    public string BoundingBoxBottomRightLongitude { get; set; } = null!;

    public static MissionViewModel FromDbModel(Mission mission)
    {
        return new MissionViewModel
        {
            Id = mission.Id,
            LocationId = mission.Location.Id,
            Location = LocationViewModel.FromDbModel(mission.Location),
            Name = mission.Name,
            Slug = mission.Slug,
            Order = mission.Order,
            MapFolderName = mission.MapFolderName,
            MapCenterLatitude = mission.MapCenterLatitude,
            MapCenterLongitude = mission.MapCenterLongitude,
            LowestFloorNumber = mission.LowestFloorNumber,
            HighestFloorNumber = mission.HighestFloorNumber,
            StartingFloorNumber = mission.StartingFloorNumber,
            TopLeftCoordinate = $"{mission.TopLeftCoordinateLatitude},{mission.TopLeftCoordinateLongitude}",
            TopLeftCoordinateLatitude = mission.TopLeftCoordinateLatitude,
            TopLeftCoordinateLongitude = mission.TopLeftCoordinateLongitude,
            BottomRightCoordinate = $"{mission.BottomRightCoordinateLatitude},{mission.BottomRightCoordinateLongitude}",
            BottomRightCoordinateLatitude = mission.BottomRightCoordinateLatitude,
            BottomRightCoordinateLongitude = mission.BottomRightCoordinateLongitude,
            SatelliteView = mission.SatelliteView,
            BeginEffectiveDate = mission.AvailableAt?.ToApiDateTimeFormat(),
            EndEffectiveDate = mission.ExpiresAt?.ToApiDateTimeFormat(),
            MissionType = mission.MissionType,
            Variants = new(),
            BackgroundUrl = mission.BackgroundUrl,
            TileUrl = mission.TileUrl,
            Svg = mission.Svg,
            MinZoom = mission.MinZoom,
            MaxZoom = mission.MaxZoom,
            BoundingBoxTopLeft = $"{mission.BoundingBoxTopLeftLatitude},{mission.BoundingBoxTopLeftLongitude}",
            BoundingBoxTopLeftLatitude = mission.BoundingBoxTopLeftLatitude,
            BoundingBoxTopLeftLongitude = mission.BoundingBoxTopLeftLongitude,
            BoundingBoxBottomRight =
                $"{mission.BoundingBoxBottomRightLatitude},{mission.BoundingBoxBottomRightLongitude}",
            BoundingBoxBottomRightLatitude = mission.BoundingBoxBottomRightLatitude,
            BoundingBoxBottomRightLongitude = mission.BoundingBoxBottomRightLongitude
        };
    }
}