using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class HomepageController : ApiControllerBase
{
    private readonly IGameService gameService;
    private readonly IElusiveTargetService elusiveTargetService;

    public HomepageController(IGameService gameService, IElusiveTargetService elusiveTargetService)
    {
        this.gameService = gameService;
        this.elusiveTargetService = elusiveTargetService;
    }

    [HttpGet]
    [Route("web/home")]
    public IActionResult GetHomepageInfo()
    {
        return Ok(new HomepageViewModel
        {
            Games = gameService.GetGames().Select(GameViewModel.FromDbModel).ToList(),
            ElusiveTargets = elusiveTargetService.GetActiveElusiveTargets().Select(ElusiveTargetViewModel.FromDbModel).ToList(),
            Environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")!.ToLowerInvariant()
        });
    }
}