using API.BusinessLogic;
using API.BusinessLogic.Authentication;
using API.BusinessLogic.Discord;
using API.Controllers.Models;
using API.Controllers.RequestModels;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AuthenticationController : ApiControllerBase
{
    private readonly IDiscordService discordService;
    private readonly IAuthenticationService authenticationService;
    private readonly IUserService userService;

    public AuthenticationController(IDiscordService discordService, IAuthenticationService authenticationService, IUserService userService)
    {
        this.discordService = discordService;
        this.authenticationService = authenticationService;
        this.userService = userService;
    }

    /// <summary>Exchanges a Discord access token for a HITMAPS bearer token.</summary>
    /// <param name="loginModel">Discord token type and access token.</param>
    /// <response code="200">
    /// A bearer token when the Discord user is an editor on the HITMAPS server.
    /// Otherwise a message of <c>error-discord-auth</c> or <c>error-not-in-server</c>.
    /// This endpoint does not require a HITMAPS token.
    /// </response>
    [HttpPost]
    [Route("web/user/login")]
    [Tags("Authentication")]
    [ProducesResponseType<AuthenticatedViewModel<object>>(StatusCodes.Status200OK)]
    public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
    {
        var discordInfo = await discordService.VerifyTokenAsync(loginModel.TokenType, loginModel.AccessToken);
        if (discordInfo == null)
        {
            return Ok(new MessageResponse
            {
                Message = "error-discord-auth"
            });
        }

        var guildUser = await discordService.VerifyServerMembershipAndEditorRoleAsync(ulong.Parse(discordInfo));
        if (guildUser == null)
        {
            return Ok(new MessageResponse
            {
                Message = "error-not-in-server"
            });
        }

        var user = userService.GetUser(guildUser);
        return Ok(new AuthenticatedViewModel<object>
        {
            Token = authenticationService.GenerateToken(user)
        });
    }
}