using API.BusinessLogic;
using API.BusinessLogic.Authentication;
using API.Controllers.Models;
using API.Controllers.RequestModels;
using API.Controllers.RequestModels.DisguiseAreas;
using DataAccess.Data.Models.EF;
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
    public IActionResult CreateDisguiseArea([FromBody] CreateDisguiseAreaModel createDisguiseAreaModel)
    {
        var disguiseArea = disguiseService.CreateDisguiseArea(createDisguiseAreaModel);

        return Ok(new AuthenticatedViewModel<DisguiseAreaViewModel>
        {
            Data = DisguiseAreaViewModel.FromDbModel(disguiseArea),
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }

    [Authorize]
    [HttpPost]
    [Route("disguise-areas/copy")]
    public IActionResult CopyDisguiseAreas([FromBody] CopyDisguiseAreasModel copyDisguiseAreasModel)
    {
        if (copyDisguiseAreasModel.OriginalDisguise == copyDisguiseAreasModel.TargetDisguise)
        {
            return BadRequest(new
            {
                Message = "Original and Target Disguises cannot be the same!"
            });
        }

        var disguiseAreas = disguiseService.CopyDisguiseAreas(copyDisguiseAreasModel);
        return Ok(new AuthenticatedViewModel<List<DisguiseAreaViewModel>>
        {
            Data = disguiseAreas.Select(DisguiseAreaViewModel.FromDbModel).ToList(),
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