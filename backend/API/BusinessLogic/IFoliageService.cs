using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface IFoliageService
{
    List<Foliage> GetFoliage(string game, string location, string mission);
}