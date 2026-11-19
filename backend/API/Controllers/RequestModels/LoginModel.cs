namespace API.Controllers.RequestModels;

/// <summary>Discord credentials exchanged for a HITMAPS bearer token.</summary>
public class LoginModel
{
    /// <summary>Discord token type, usually <c>Bearer</c>.</summary>
    public string TokenType { get; set; } = null!;

    /// <summary>Discord access token.</summary>
    public string AccessToken { get; set; } = null!;
}