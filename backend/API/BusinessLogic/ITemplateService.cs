using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface ITemplateService
{
    List<Template> GetAllTemplates();
}