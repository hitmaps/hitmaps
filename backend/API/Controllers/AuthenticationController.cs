using API.BusinessLogic;
using API.BusinessLogic.Discord;
using API.Controllers.Models;
using API.Controllers.RequestModels;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AuthenticationController : ApiControllerBase
{
    private readonly IDiscordService discordService;
    private readonly IAuthenticationService authenticationService;

    public AuthenticationController(IDiscordService discordService, IAuthenticationService authenticationService)
    {
        this.discordService = discordService;
        this.authenticationService = authenticationService;
    }

    [HttpPost]
    [Route("web/user/login")]
    public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
    {
        var discordInfo = await discordService.VerifyTokenAsync(loginModel.TokenType, loginModel.AccessToken);
        if (discordInfo == null)
        {
            return Unauthorized(new
            {
                Message = "Unable to verify discord token provided"
            });
        }

        var guildUser = await discordService.VerifyServerMembershipAndEditorRoleAsync(ulong.Parse(discordInfo));
        if (guildUser == null)
        {
            return Problem(
                statusCode: StatusCodes.Status403Forbidden,
                title: "Authentication Failure",
                detail: "You are either not a member of the server or do not have the Editor role."
            );
        }
        
        return Ok(new AuthenticatedViewModel
        {
            Token = authenticationService.GenerateToken(guildUser)
        });
    }
}