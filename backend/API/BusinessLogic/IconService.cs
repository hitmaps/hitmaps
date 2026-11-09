using DataAccess.Data;
using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public class IconService : IIconService
{
    private readonly HitmapsDbContext dbContext;

    public IconService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<Icon> GetAllIcons()
    {
        return dbContext.Icons.ToList();
    }
}