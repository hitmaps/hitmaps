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
            return Ok(new
            {
                Message = "error-discord-auth"
            });
        }

        var guildUser = await discordService.VerifyServerMembershipAndEditorRoleAsync(ulong.Parse(discordInfo));
        if (guildUser == null)
        {
            return Ok(new
            {
                Message = "error-not-in-server"
            });
        }
        
        return Ok(new AuthenticatedViewModel
        {
            Token = authenticationService.GenerateToken(guildUser)
        });
    }
}