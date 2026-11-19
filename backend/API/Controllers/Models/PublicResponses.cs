namespace API.Controllers.Models;

/// <summary>A short message returned for an error the caller can act on.</summary>
public class MessageResponse
{
    /// <summary>Human-readable or stable error code.</summary>
    public string Message { get; set; } = null!;
}

/// <summary>Disguises available on one mission.</summary>
public class DisguiseListResponse
{
    /// <summary>Disguises for the mission, in display order.</summary>
    public List<DisguiseViewModel> Disguises { get; set; } = new();
}

/// <summary>Map regions where one disguise is allowed or restricted.</summary>
public class DisguiseAreaListResponse
{
    /// <summary>Regions for the requested disguise.</summary>
    public List<DisguiseAreaViewModel> DisguiseAreas { get; set; } = new();
}

/// <summary>Foliage regions drawn on a mission map.</summary>
public class FoliageListResponse
{
    /// <summary>Foliage polygons for the mission.</summary>
    public List<FoliageViewModel> Foliage { get; set; } = new();
}

/// <summary>Ledge regions drawn on a mission map.</summary>
public class LedgeListResponse
{
    /// <summary>Ledge polygons for the mission.</summary>
    public List<LedgeViewModel> Ledges { get; set; } = new();
}

/// <summary>People who support HITMAPS.</summary>
public class SupporterListResponse
{
    /// <summary>Supporters, ordered for the public supporters page.</summary>
    public List<SupporterViewModel> Data { get; set; } = new();
}
