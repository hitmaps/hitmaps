using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

namespace API.BusinessLogic;

public class MissionService : IMissionService
{
    private readonly HitmapsDbContext dbContext;
    private readonly IImageService imageService;

    public MissionService(HitmapsDbContext dbContext, IImageService imageService)
    {
        this.dbContext = dbContext;
        this.imageService = imageService;
    }

    public List<Mission> GetMissions(string game, string location)
    {
        return dbContext.Missions
            .Include(x => x.Location)
            .Include(x => x.Variants)
            .Include(x => x.FloorNames)
            .Where(x => x.Location.Slug == location && x.Location.Game.Slug == game)
            .ToList();
    }

    public Mission? GetMission(string game, string location, string slug)
    {
        return dbContext.Missions
            .Include(x => x.Location)
            .Include(x => x.Variants)
            .Include(x => x.FloorNames)
            .FirstOrDefault(x => x.Slug == slug && x.Location.Slug == location && x.Location.Game.Slug == game);
    }

    public string GetOgImagePath(string game, string location, string slug)
    {
        var mission = dbContext.Missions.FirstOrDefault(x =>
            x.Slug == slug && x.Location.Slug == location && x.Location.Game.Slug == game);
        if (mission == null)
        {
            throw new MissionNotFoundException(slug);
        }

        return imageService.BuildOgImage(mission);
    }
}