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

    [HttpGet("supporters")]
    public IActionResult GetSupporters()
    {
        return Ok(new
        {
            Data = dbContext.Supporters
                .OrderBy(x => x.Order)
                .ThenByDescending(x => x.OneTimeContributions)
                .ThenBy(x => x.Name)
                .Select(SupporterViewModel.FromDbModel).ToList()
        });
    }
}