using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface IMissionService
{
    List<Mission> GetMissions(string game, string location);
    Mission? GetMission(string game, string location, string slug);
    string GetOgImagePath(string game, string location, string slug);
}