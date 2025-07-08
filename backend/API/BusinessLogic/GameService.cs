using DataAccess.Data;
using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public class GameService : IGameService
{
    private readonly HitmapsDbContext dbContext;

    public GameService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<Game> GetGames()
    {
        return dbContext.Games.Where(x => !x.Slug.StartsWith("redacted")).ToList();
    }

    public Game GetGame(string slug)
    {
        return dbContext.Games.First(x => x.Slug == slug);
    }
}