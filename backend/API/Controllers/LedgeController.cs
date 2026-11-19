using API.BusinessLogic;
using API.BusinessLogic.Authentication;
using API.Controllers.Models;
using API.Controllers.RequestModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class LedgeController : ApiControllerBase
{
    private readonly ILedgeService ledgeService;
    private readonly IAuthenticationService authenticationService;

    public LedgeController(ILedgeService ledgeService, IAuthenticationService authenticationService)
    {
        this.ledgeService = ledgeService;
        this.authenticationService = authenticationService;
    }

    /// <summary>Lists ledge regions for a mission map.</summary>
    /// <param name="game">Game slug, such as <c>hitman3</c>.</param>
    /// <param name="location">Location slug, such as <c>paris</c>.</param>
    /// <param name="mission">Mission slug.</param>
    /// <response code="200">Ledge polygons. Each vertex is <c>latitude,longitude</c>.</response>
    /// <response code="404">No mission matches the slug.</response>
    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/ledges")]
    [Tags("Map")]
    [ProducesResponseType<LedgeListResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType<MessageResponse>(StatusCodes.Status404NotFound)]
    public IActionResult GetLedges(string game, string location, string mission)
    {
        try
        {
            return Ok(new LedgeListResponse
            {
                Ledges = ledgeService.GetLedges(game, location, mission)
                    .Select(LedgeViewModel.FromDbModel)
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

    [Authorize]
    [HttpPost]
    [Route("ledges")]
    public IActionResult CreateLedge([FromBody] CreateLedgeModel createLedgeModel)
    {
        var ledge = ledgeService.CreateLedge(createLedgeModel);
        return Ok(new AuthenticatedViewModel<LedgeViewModel>
        {
            Data = LedgeViewModel.FromDbModel(ledge),
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }

    [Authorize]
    [HttpDelete]
    [Route("ledges/{ledgeId:int}")]
    public IActionResult DeleteLedge(int ledgeId)
    {
        ledgeService.DeleteLedge(ledgeId);
        return Ok(new AuthenticatedViewModel<dynamic>
        {
            Data = new
            {
                Message = "Ledge deleted!"
            },
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }
}