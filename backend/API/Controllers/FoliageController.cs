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