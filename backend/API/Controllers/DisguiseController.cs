using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class DisguiseController : ApiControllerBase
{
    private readonly IDisguiseService disguiseService;

    public DisguiseController(IDisguiseService disguiseService)
    {
        this.disguiseService = disguiseService;
    }

    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/disguises")]
    public IActionResult GetDisguises(string game, string location, string mission)
    {
        try
        {
            return Ok(disguiseService.GetDisguises(game, location, mission)
                .Select(DisguiseViewModel.FromDbModel)
                .ToList());
        }
        catch (MissionNotFoundException e)
        {
            return NotFound(new
            {
                e.Message
            });
        }
    }

    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/disguise-areas/{disguiseId}")]
    public IActionResult GetDisguiseAreas(string game, string location, string mission, int disguiseId)
    {
        return Ok(disguiseService.GetDisguiseAreas(disguiseId)
            .Select(DisguiseAreaViewModel.FromDbModel)
            .ToList());
    }
}