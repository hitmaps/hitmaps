using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class IconController : ApiControllerBase
{
    private readonly IIconService iconService;

    public IconController(IIconService iconService)
    {
        this.iconService = iconService;
    }

    /// <summary>Lists map-editor icons, grouped for the editor sidebar.</summary>
    /// <response code="200">Icons under Weapons and Tools, Points of Interest, and Navigation.</response>
    [HttpGet]
    [Route("editor/icons")]
    [Tags("Editor")]
    [ProducesResponseType<TopLevelCategoryParentViewModel<IconViewModel>>(StatusCodes.Status200OK)]
    public IActionResult GetIcons()
    {
        var icons = iconService.GetAllIcons();
        return Ok(new TopLevelCategoryParentViewModel<IconViewModel>
        {
            WeaponsAndTools = icons.Where(x => x.Group == "Weapons and Tools").Select(IconViewModel.FromDbModel)
                .ToList(),
            PointsOfInterest = icons.Where(x => x.Group == "Points of Interest").Select(IconViewModel.FromDbModel)
                .ToList(),
            Navigation = icons.Where(x => x.Group == "Navigation").Select(IconViewModel.FromDbModel).ToList()
        });
    }
}