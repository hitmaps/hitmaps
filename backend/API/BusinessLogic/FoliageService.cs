using API.Controllers.RequestModels;
using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

namespace API.BusinessLogic;

public class FoliageService : IFoliageService
{
    private readonly HitmapsDbContext dbContext;

    public FoliageService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<Foliage> GetFoliage(string game, string location, string mission)
    {
        var missionData = dbContext.Missions.FirstOrDefault(x => x.Slug == mission && 
                                                                 x.Location.Slug == location && 
                                                                 x.Location.Game.Slug == game);

        if (missionData == null)
        {
            throw new MissionNotFoundException(mission);
        }

        return dbContext.Foliage
            .Include(x => x.Mission)
            .Include(x => x.Vertices)
            .Where(x => x.Mission.Id == missionData.Id)
            .ToList();
    }

    public Foliage CreateFoliage(CreateFoliageModel createFoliageModel)
    {
        var mission = dbContext.Missions.First(x => x.Id == createFoliageModel.MissionId);
        var foliage = new Foliage
        {
            Mission = mission,
            Level = createFoliageModel.Level,
            Vertices = createFoliageModel.Vertices.Select(x => new FoliageVertex
            {
                Latitude = x.Split(",")[0],
                Longitude = x.Split(",")[1]
            }).ToList()
        };
        dbContext.Update(foliage);
        dbContext.SaveChanges();

        return foliage;
    }

    public void DeleteFoliage(int foliageId)
    {
        var foliage = dbContext.Foliage.First(x => x.Id == foliageId);
        dbContext.Remove(foliage);
        dbContext.SaveChanges();
    }
}