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

    /// <summary>Lists missions at a location.</summary>
    /// <param name="game">Game slug, such as <c>hitman3</c>.</param>
    /// <param name="location">Location slug, such as <c>paris</c>.</param>
    /// <response code="200">Missions at that location, including expired and not-yet-available missions.</response>
    [HttpGet]
    [Route("games/{game}/locations/{location}/missions")]
    [Tags("Missions")]
    [ProducesResponseType<List<MissionViewModel>>(StatusCodes.Status200OK)]
    public IActionResult GetMissions(string game, string location)
    {
        return Ok(missionService.GetMissions(game, location)
            .Select(MissionViewModel.FromDbModel)
            .ToList());
    }

    /// <summary>Gets one mission by slug.</summary>
    /// <param name="game">Game slug, such as <c>hitman3</c>.</param>
    /// <param name="location">Location slug, such as <c>paris</c>.</param>
    /// <param name="slug">Mission slug.</param>
    /// <response code="200">The mission, including variants and floor names.</response>
    /// <response code="404">No mission matches the slug.</response>
    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{slug}")]
    [Tags("Missions")]
    [ProducesResponseType<MissionViewModel>(StatusCodes.Status200OK)]
    [ProducesResponseType<MessageResponse>(StatusCodes.Status404NotFound)]
    public IActionResult GetMission(string game, string location, string slug)
    {
        var mission = missionService.GetMission(game, location, slug);

        if (mission == null)
        {
            return NotFound(new MessageResponse
            {
                Message = "Mission not found"
            });
        }
        
        return Ok(MissionViewModel.FromDbModel(mission));
    }

    /// <summary>Gets the Open Graph image for a mission.</summary>
    /// <param name="game">Game slug, such as <c>hitman3</c>.</param>
    /// <param name="location">Location slug, such as <c>paris</c>.</param>
    /// <param name="slug">Mission slug.</param>
    /// <response code="200">A PNG image.</response>
    /// <response code="404">No mission matches the slug.</response>
    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{slug}/ogimage.png")]
    [Tags("Missions")]
    [Produces("image/png")]
    [ProducesResponseType(typeof(byte[]), StatusCodes.Status200OK, "image/png")]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult GetOgImage(string game, string location, string slug)
    {
        try
        {
            var imagePath = missionService.GetOgImagePath(game, location, slug);
            return PhysicalFile(imagePath, "image/png");
        }
        catch (MissionNotFoundException)
        {
            return NotFound();
        }
        
    }
}