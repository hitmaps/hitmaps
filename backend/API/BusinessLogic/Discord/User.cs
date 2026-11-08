namespace API.BusinessLogic.Discord;

public class User
{
    public string Id { get; set; } = null!;
    public string Username { get; set; } = null!;
    public string Discriminator { get; set; } = null!;
    public string? Avatar { get; set; }
}