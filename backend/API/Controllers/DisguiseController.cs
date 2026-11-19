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

    /// <summary>Lists disguises for a mission.</summary>
    /// <param name="game">Game slug, such as <c>hitman3</c>.</param>
    /// <param name="location">Location slug, such as <c>paris</c>.</param>
    /// <param name="mission">Mission slug.</param>
    /// <response code="200">Disguises for the mission.</response>
    /// <response code="404">No mission matches the slug.</response>
    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/disguises")]
    [Tags("Disguises")]
    [ProducesResponseType<DisguiseListResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType<MessageResponse>(StatusCodes.Status404NotFound)]
    public IActionResult GetDisguises(string game, string location, string mission)
    {
        try
        {
            return Ok(new DisguiseListResponse
            {
                Disguises = disguiseService.GetDisguises(game, location, mission)
                    .Select(DisguiseViewModel.FromDbModel)
                    .ToList()
            });
        }
        catch (MissionNotFoundException e)
        {
            return NotFound(new MessageResponse
            {
                Message = e.Message
            });
        }
    }

    /// <summary>Lists map regions for one disguise.</summary>
    /// <param name="game">Game slug. Present in the path for consistency; the disguise id selects the data.</param>
    /// <param name="location">Location slug. Present in the path for consistency.</param>
    /// <param name="mission">Mission slug. Present in the path for consistency.</param>
    /// <param name="disguiseId">Disguise id from the disguises endpoint.</param>
    /// <response code="200">Regions for that disguise. An unknown id returns an empty list.</response>
    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/disguise-areas/{disguiseId}")]
    [Tags("Disguises")]
    [ProducesResponseType<DisguiseAreaListResponse>(StatusCodes.Status200OK)]
    public IActionResult GetDisguiseAreas(string game, string location, string mission, int disguiseId)
    {
        return Ok(new DisguiseAreaListResponse
        {
            DisguiseAreas = disguiseService.GetDisguiseAreas(disguiseId)
                .Select(DisguiseAreaViewModel.FromDbModel)
                .ToList()
        });
    }
}