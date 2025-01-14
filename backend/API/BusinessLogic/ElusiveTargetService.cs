using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

namespace API.BusinessLogic;

public class ElusiveTargetService : IElusiveTargetService
{
    private readonly HitmapsDbContext dbContext;

    public ElusiveTargetService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<ElusiveTarget> GetActiveElusiveTargets()
    {
        //@formatter:off
        return dbContext.ElusiveTargets
            .Include(x => x.Mission)
                .ThenInclude(x => x.Location)
                    .ThenInclude(x => x.Game)
            .Where(x => x.EndsAt > DateTime.UtcNow)
            .OrderBy(x => x.EndsAt)
            .ThenByDescending(x => x.Id)
            .ToList();
        //@formatter:on
    }
}