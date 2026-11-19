using API.BusinessLogic;
using API.Controllers.Models;
using DataAccess.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class HomepageController : ApiControllerBase
{
    private readonly IGameService gameService;
    private readonly IElusiveTargetService elusiveTargetService;
    private readonly HitmapsDbContext dbContext;

    public HomepageController(IGameService gameService, IElusiveTargetService elusiveTargetService, HitmapsDbContext dbContext)
    {
        this.gameService = gameService;
        this.elusiveTargetService = elusiveTargetService;
        this.dbContext = dbContext;
    }

    /// <summary>Gets the data shown on the HITMAPS homepage.</summary>
    /// <response code="200">Games, active elusive targets, the environment name, and featured supporters.</response>
    [HttpGet]
    [Route("web/home")]
    [Tags("Site")]
    [ProducesResponseType<HomepageViewModel>(StatusCodes.Status200OK)]
    public IActionResult GetHomepageInfo()
    {
        return Ok(new HomepageViewModel
        {
            Games = gameService.GetGames().Select(GameViewModel.FromDbModel).ToList(),
            ElusiveTargets = elusiveTargetService.GetActiveElusiveTargets().Select(ElusiveTargetViewModel.FromDbModel).ToList(),
            Environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")!.ToLowerInvariant(),
            // Tier 3 == Master Assassin
            HomepageSupporters = dbContext.Supporters.Where(x => x.Order <= 3).ToList().Select(SupporterViewModel.FromDbModel).ToList()
        });
    }
}