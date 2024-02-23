using DataAccess.Data;
using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public class TemplateService : ITemplateService
{
    private readonly HitmapsDbContext dbContext;

    public TemplateService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<Template> GetAllTemplates()
    {
        return dbContext.Templates.ToList();
    }
}