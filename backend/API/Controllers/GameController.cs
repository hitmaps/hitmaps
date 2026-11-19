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

    /// <summary>Lists published HITMAPS games.</summary>
    /// <response code="200">Every game that is not redacted.</response>
    [HttpGet]
    [Route("games")]
    [Tags("Games")]
    [ProducesResponseType<List<GameViewModel>>(StatusCodes.Status200OK)]
    public IActionResult GetGames()
    {
        return Ok(gameService.GetGames().Select(GameViewModel.FromDbModel).ToList());
    }

    /// <summary>Gets one game by slug.</summary>
    /// <param name="slug">Game slug, such as <c>hitman3</c>.</param>
    /// <response code="200">The game.</response>
    [HttpGet]
    [Route("games/{slug}")]
    [Tags("Games")]
    [ProducesResponseType<GameViewModel>(StatusCodes.Status200OK)]
    public IActionResult GetGame(string slug)
    {
        return Ok(GameViewModel.FromDbModel(gameService.GetGame(slug)));
    }
}