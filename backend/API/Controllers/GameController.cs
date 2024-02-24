using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class GameController : ApiControllerBase
{
    private readonly IGameService gameService;

    public GameController(IGameService gameService)
    {
        this.gameService = gameService;
    }

    [HttpGet]
    [Route("games")]
    public IActionResult GetGames()
    {
        return Ok(gameService.GetGames().Select(GameViewModel.FromDbModel).ToList());
    }

    [HttpGet]
    [Route("games/{slug}")]
    public IActionResult GetGame(string slug)
    {
        return Ok(GameViewModel.FromDbModel(gameService.GetGame(slug)));
    }
}