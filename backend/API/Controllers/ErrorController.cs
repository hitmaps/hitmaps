using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ErrorController : ControllerBase
{
    [Route("/error")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public IActionResult HandleError([FromServices] IHostEnvironment hostEnvironment)
    {
        var exceptionHandlerFeature = HttpContext.Features.Get<IExceptionHandlerFeature>()!;

        return Problem(
            title: exceptionHandlerFeature.Error.Message
        );
    }
}