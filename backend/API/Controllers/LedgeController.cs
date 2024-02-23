using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class LedgeController : ApiControllerBase
{
    private readonly ILedgeService ledgeService;

    public LedgeController(ILedgeService ledgeService)
    {
        this.ledgeService = ledgeService;
    }

    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/ledges")]
    public IActionResult GetLedges(string game, string location, string mission)
    {
        try
        {
            return Ok(new
            {
                Ledges = ledgeService.GetLedges(game, location, mission)
                    .Select(LedgeViewModel.FromDbModel)
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