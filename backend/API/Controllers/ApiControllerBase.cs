using API.BusinessLogic.Authentication;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api")]
public abstract class ApiControllerBase : Controller
{
    internal int GetCurrentUserId()
    {
        return int.Parse(User.Claims.First(x => x.Type == AuthenticationService.TopicUserId).Value);
    }    
}