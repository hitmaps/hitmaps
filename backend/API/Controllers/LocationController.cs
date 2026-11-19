using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class LocationController : ApiControllerBase
{
    private readonly ILocationService locationService;

    public LocationController(ILocationService locationService)
    {
        this.locationService = locationService;
    }

    /// <summary>Lists locations in a game, including the missions currently available at each one.</summary>
    /// <param name="game">Game slug, such as <c>hitman3</c>.</param>
    /// <response code="200">Locations in display order. An unknown game returns an empty list.</response>
    [HttpGet]
    [Route("games/{game}/locations")]
    [Tags("Locations")]
    [ProducesResponseType<List<LocationWithMissionsViewModel>>(StatusCodes.Status200OK)]
    public IActionResult GetLocations(string game)
    {
        return Ok(locationService.GetLocations(game)
            .Select(LocationWithMissionsViewModel.FromDbModel)
            .ToList());
    }

    /// <summary>Gets one location by slug.</summary>
    /// <param name="game">Game slug, such as <c>hitman3</c>.</param>
    /// <param name="location">Location slug, such as <c>paris</c>.</param>
    /// <response code="200">The location, without its mission list.</response>
    [HttpGet]
    [Route("games/{game}/locations/{location}")]
    [Tags("Locations")]
    [ProducesResponseType<LocationViewModel>(StatusCodes.Status200OK)]
    public IActionResult GetLocation(string game, string location)
    {
        return Ok(LocationViewModel.FromDbModel(locationService.GetLocation(game, location)));
    }
}