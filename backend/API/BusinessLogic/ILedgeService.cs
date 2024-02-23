using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface ILedgeService
{
    List<Ledge> GetLedges(string game, string location, string mission);
}