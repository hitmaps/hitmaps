using API.BusinessLogic;
using API.BusinessLogic.Authentication;
using API.Controllers.Models;
using API.Controllers.RequestModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class FoliageController : ApiControllerBase
{
    private readonly IFoliageService foliageService;
    private readonly IAuthenticationService authenticationService;

    public FoliageController(IFoliageService foliageService, IAuthenticationService authenticationService)
    {
        this.foliageService = foliageService;
        this.authenticationService = authenticationService;
    }

    /// <summary>Lists foliage regions for a mission map.</summary>
    /// <param name="game">Game slug, such as <c>hitman3</c>.</param>
    /// <param name="location">Location slug, such as <c>paris</c>.</param>
    /// <param name="mission">Mission slug.</param>
    /// <response code="200">Foliage polygons. Each vertex is <c>latitude,longitude</c>.</response>
    /// <response code="404">No mission matches the slug.</response>
    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/foliage")]
    [Tags("Map")]
    [ProducesResponseType<FoliageListResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType<MessageResponse>(StatusCodes.Status404NotFound)]
    public IActionResult GetFoliage(string game, string location, string mission)
    {
        try
        {
            return Ok(new FoliageListResponse
            {
                Foliage = foliageService.GetFoliage(game, location, mission)
                    .Select(FoliageViewModel.FromDbModel)
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
    [Route("foliage")]
    public IActionResult CreateFoliage([FromBody] CreateFoliageModel createFoliageModel)
    {
        var foliage = foliageService.CreateFoliage(createFoliageModel);
        return Ok(new AuthenticatedViewModel<FoliageViewModel>
        {
            Data = FoliageViewModel.FromDbModel(foliage),
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }

    [Authorize]
    [HttpDelete]
    [Route("foliage/{foliageId:int}")]
    public IActionResult DeleteFoliage(int foliageId)
    {
        foliageService.DeleteFoliage(foliageId);
        return Ok(new AuthenticatedViewModel<dynamic>
        {
            Data = new
            {
                Message = "Foliage deleted!"
            },
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }
}