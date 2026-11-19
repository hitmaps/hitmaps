using API.Controllers.Models;
using DataAccess.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class SupportersController : ApiControllerBase
{
    private readonly HitmapsDbContext dbContext;

    public SupportersController(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    /// <summary>Lists people who support HITMAPS.</summary>
    /// <response code="200">Supporters ordered by display order, then one-time contributions, then name.</response>
    [HttpGet("supporters")]
    [Tags("Site")]
    [ProducesResponseType<SupporterListResponse>(StatusCodes.Status200OK)]
    public IActionResult GetSupporters()
    {
        return Ok(new SupporterListResponse
        {
            Data = dbContext.Supporters
                .OrderBy(x => x.Order)
                .ThenByDescending(x => x.OneTimeContributions)
                .ThenBy(x => x.Name)
                .Select(SupporterViewModel.FromDbModel).ToList()
        });
    }
}