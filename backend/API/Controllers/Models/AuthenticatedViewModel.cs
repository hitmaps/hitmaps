using API.BusinessLogic.Authentication;

namespace API.Controllers.Models;

public class AuthenticatedViewModel<T>
{
    public string Token { get; set; } = null!;
    public T? Data { get; set; }
}