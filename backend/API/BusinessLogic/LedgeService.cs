using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

namespace API.BusinessLogic;

public class LedgeService : ILedgeService
{
    private readonly HitmapsDbContext dbContext;

    public LedgeService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<Ledge> GetLedges(string game, string location, string mission)
    {
        var missionData = dbContext.Missions.FirstOrDefault(x => x.Slug == mission && 
                                                                 x.Location.Slug == location && 
                                                                 x.Location.Game.Slug == game);

        if (missionData == null)
        {
            throw new MissionNotFoundException(mission);
        }

        return dbContext.Ledges
            .Include(x => x.Mission)
            .Include(x => x.Vertices)
            .Where(x => x.Mission.Id == missionData.Id)
            .ToList();
    }
}