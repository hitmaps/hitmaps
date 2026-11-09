namespace API.Controllers.RequestModels;

public class LoginModel
{
    public string TokenType { get; set; } = null!;
    public string AccessToken { get; set; } = null!;
}