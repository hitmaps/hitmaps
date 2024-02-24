using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface IElusiveTargetService
{
    List<ElusiveTarget> GetActiveElusiveTargets();
}