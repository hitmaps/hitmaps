using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class LocationViewModel
{
    public int Id { get; set; }
    public string Destination { get; set; } = null!;
    public string DestinationCountry { get; set; } = null!;
    public int Order { get; set; }
    public string Slug { get; set; } = null!;
    public string BackgroundUrl { get; set; } = null!;

    public static LocationViewModel FromDbModel(Location location)
    {
        return new LocationViewModel
        {
            Id = location.Id,
            Destination = location.Destination,
            DestinationCountry = location.DestinationCountry,
            Order = location.Order,
            Slug = location.Slug,
            BackgroundUrl = location.BackgroundUrl
        };
    }
}