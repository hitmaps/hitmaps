using API.BusinessLogic.Authentication;

namespace API.Controllers.Models;

/// <summary>A refreshed bearer token, sometimes wrapped around the resource that was just changed.</summary>
public class AuthenticatedViewModel<T>
{
    public string Token { get; set; } = null!;
    public T? Data { get; set; }
}