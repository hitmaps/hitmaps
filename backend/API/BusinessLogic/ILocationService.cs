using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface ILocationService
{
    List<Location> GetLocations(string game);

    Location GetLocation(string game, string slug);
}