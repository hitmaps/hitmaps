using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

namespace API.BusinessLogic;

public class MissionService : IMissionService
{
    private readonly HitmapsDbContext dbContext;

    public MissionService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<Mission> GetMissions(string game, string location)
    {
        return dbContext.Missions
            .Include(x => x.Location)
            .Include(x => x.Variants)
            .Where(x => x.Location.Slug == location && x.Location.Game.Slug == game)
            .ToList();
    }

    public Mission? GetMission(string game, string location, string slug)
    {
        return dbContext.Missions
            .Include(x => x.Location)
            .Include(x => x.Variants)
            .FirstOrDefault(x => x.Slug == slug && x.Location.Slug == location && x.Location.Game.Slug == game);
    }
}