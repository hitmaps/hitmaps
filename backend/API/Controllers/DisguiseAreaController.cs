using API.BusinessLogic;
using API.BusinessLogic.Authentication;
using API.Controllers.Models;
using API.Controllers.RequestModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class DisguiseAreaController : ApiControllerBase
{
    private readonly IDisguiseService disguiseService;
    private readonly IAuthenticationService authenticationService;

    public DisguiseAreaController(IDisguiseService disguiseService, IAuthenticationService authenticationService)
    {
        this.disguiseService = disguiseService;
        this.authenticationService = authenticationService;
    }

    [Authorize]
    [HttpPost]
    [Route("disguise-areas")]
    public IActionResult CreateDisguiseArea(CreateDisguiseAreaModel createDisguiseAreaModel)
    {
        var disguiseArea = disguiseService.CreateDisguiseArea(createDisguiseAreaModel);

        return Ok(new AuthenticatedViewModel<DisguiseAreaViewModel>
        {
            Data = DisguiseAreaViewModel.FromDbModel(disguiseArea),
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }

    [Authorize]
    [HttpDelete]
    [Route("disguise-areas/{areaId:int}")]
    public IActionResult DeleteDisguiseArea(int areaId)
    {
        disguiseService.DeleteDisguiseArea(areaId);

        return Ok(new AuthenticatedViewModel<dynamic>
        {
            Data = new
            {
                Message = "Disguise area deleted!"
            },
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }
}