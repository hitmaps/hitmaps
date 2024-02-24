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

    [HttpGet]
    [Route("games/{game}/locations")]
    public IActionResult GetLocations(string game)
    {
        return Ok(locationService.GetLocations(game)
            .Select(LocationWithMissionsViewModel.FromDbModel)
            .ToList());
    }

    [HttpGet]
    [Route("games/{game}/locations/{location}")]
    public IActionResult GetLocation(string game, string location)
    {
        return Ok(LocationViewModel.FromDbModel(locationService.GetLocation(game, location)));
    }
}