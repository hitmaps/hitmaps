using API.Controllers.RequestModels;
using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface IDisguiseService
{
    List<Disguise> GetDisguises(string game, string location, string mission);
    List<DisguiseArea> GetDisguiseAreas(int disguiseId);
    DisguiseArea CreateDisguiseArea(CreateDisguiseAreaModel createDisguiseAreaModel);
    void DeleteDisguiseArea(int areaId);
}