using API.Controllers.RequestModels;
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

    public Ledge CreateLedge(CreateLedgeModel createLedgeModel)
    {
        var mission = dbContext.Missions.First(x => x.Id == createLedgeModel.MissionId);
        var ledge = new Ledge
        {
            Mission = mission,
            Level = createLedgeModel.Level,
            Vertices = createLedgeModel.Vertices.Select(x => new LedgeVertex
            {
                Latitude = x.Split(",")[0],
                Longitude = x.Split(",")[1]
            }).ToList()
        };
        dbContext.Update(ledge);
        dbContext.SaveChanges();

        return ledge;
    }

    public void DeleteLedge(int ledgeId)
    {
        var ledge = dbContext.Ledges.First(x => x.Id == ledgeId);
        dbContext.Remove(ledge);
        dbContext.SaveChanges();
    }
}