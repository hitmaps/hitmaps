using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class TemplateController : ApiControllerBase
{
    private readonly ITemplateService templateService;

    public TemplateController(ITemplateService templateService)
    {
        this.templateService = templateService;
    }

    [HttpGet]
    [Route("editor/templates")]
    public IActionResult GetTemplates()
    {
        var templates = templateService.GetAllTemplates();
        return Ok(new TopLevelCategoryParentViewModel<TemplateViewModel>
        {
            WeaponsAndTools = templates.Where(x => x.Type == "Weapons and Tools").Select(TemplateViewModel.FromDbModel).ToList(),
            PointsOfInterest = templates.Where(x => x.Type == "Points of Interest").Select(TemplateViewModel.FromDbModel).ToList(),
            Navigation = templates.Where(x => x.Type == "Navigation").Select(TemplateViewModel.FromDbModel).ToList(),
        });
    }
}