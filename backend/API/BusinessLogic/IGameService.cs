using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface IGameService
{
    List<Game> GetGames();

    Game GetGame(string slug);
}