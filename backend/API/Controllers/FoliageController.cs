using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class FoliageController : ApiControllerBase
{
    private readonly IFoliageService foliageService;

    public FoliageController(IFoliageService foliageService)
    {
        this.foliageService = foliageService;
    }

    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/foliage")]
    public IActionResult GetFoliage(string game, string location, string mission)
    {
        try
        {
            return Ok(new
            {
                Foliage = foliageService.GetFoliage(game, location, mission)
                    .Select(FoliageViewModel.FromDbModel)
                    .ToList()
            });
        }
        catch (MissionNotFoundException e)
        {
            return NotFound(new
            {
                e.Message
            });
        }
    }
}