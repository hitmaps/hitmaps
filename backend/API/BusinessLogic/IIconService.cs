using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface IIconService
{
    List<Icon> GetAllIcons();
}