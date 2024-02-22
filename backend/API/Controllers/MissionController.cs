using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class MissionController : ApiControllerBase
{
    private readonly IMissionService missionService;

    public MissionController(IMissionService missionService)
    {
        this.missionService = missionService;
    }

    [HttpGet]
    [Route("games/{game}/locations/{location}/missions")]
    public IActionResult GetMissions(string game, string location)
    {
        return Ok(missionService.GetMissions(game, location)
            .Select(MissionViewModel.FromDbModel)
            .ToList());
    }

    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{slug}")]
    public IActionResult GetMission(string game, string location, string slug)
    {
        var mission = missionService.GetMission(game, location, slug);

        if (mission == null)
        {
            return NotFound(new
            {
                Message = "Mission not found"
            });
        }
        
        return Ok(MissionViewModel.FromDbModel(mission));
    }
}