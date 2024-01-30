using DataAccess.Data;
using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public class LocationService : ILocationService
{
    private readonly HitmapsDbContext dbContext;

    public LocationService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<Location> GetLocations(string game)
    {
        return dbContext.Locations.Where(x => x.Game.Slug == game).ToList();
    }

    public Location GetLocation(string game, string slug)
    {
        return dbContext.Locations.First(x => x.Game.Slug == game && x.Slug == slug);
    }
}