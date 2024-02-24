using API.Controllers.RequestModels;
using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

namespace API.BusinessLogic;

public class DisguiseService : IDisguiseService
{
    private readonly HitmapsDbContext dbContext;

    public DisguiseService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<Disguise> GetDisguises(string game, string location, string mission)
    {
        var missionData = dbContext.Missions.FirstOrDefault(x => x.Slug == mission && 
                                                                 x.Location.Slug == location && 
                                                                 x.Location.Game.Slug == game);
        if (missionData == null)
        {
            throw new MissionNotFoundException(mission);
        }

        return dbContext.Disguises
            .Where(x => x.Mission.Id == missionData.Id)
            .ToList();
    }

    public List<DisguiseArea> GetDisguiseAreas(int disguiseId)
    {
        var disguise = dbContext.Disguises.Include(x => x.DisguiseAreas)
            .ThenInclude(x => x.Vertices)
            .FirstOrDefault(x => x.Id == disguiseId);
        
        return disguise?.DisguiseAreas ?? new List<DisguiseArea>();
    }

    public DisguiseArea CreateDisguiseArea(CreateDisguiseAreaModel createDisguiseAreaModel)
    {
        var disguise = dbContext.Disguises.First(x => x.Id == createDisguiseAreaModel.DisguiseId);
        var disguiseArea = new DisguiseArea
        {
            Disguise = disguise,
            Level = createDisguiseAreaModel.Level,
            Type = createDisguiseAreaModel.Type,
            Vertices = createDisguiseAreaModel.Vertices.Select(x => new DisguiseAreaVertex
            {
                Latitude = x.Split(",")[0],
                Longitude = x.Split(",")[1]
            }).ToList()
        };

        dbContext.Update(disguiseArea);
        dbContext.SaveChanges();

        return disguiseArea;
    }

    public void DeleteDisguiseArea(int areaId)
    {
        var disguiseArea = dbContext.DisguiseAreas.First(x => x.Id == areaId);
        dbContext.Remove(disguiseArea);
        dbContext.SaveChanges();
    }
}