using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

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
        return dbContext.Locations
            .Include(x => x.Missions.Where(mission => (mission.AvailableAt == null || mission.AvailableAt <= DateTime.UtcNow) &&
                                                      (mission.ExpiresAt == null || mission.ExpiresAt > DateTime.UtcNow)))
                .ThenInclude(x => x.Variants)
            .Include(x => x.Missions.Where(mission => (mission.AvailableAt == null || mission.AvailableAt <= DateTime.UtcNow) &&
                                                      (mission.ExpiresAt == null || mission.ExpiresAt > DateTime.UtcNow)))
                .ThenInclude(x => x.FloorNames)
            .Where(x => x.Game.Slug == game)
            .OrderBy(x => x.Order)
            .ToList();
    }

    public Location GetLocation(string game, string slug)
    {
        return dbContext.Locations.First(x => x.Game.Slug == game && x.Slug == slug);
    }
}