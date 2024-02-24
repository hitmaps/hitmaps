using Discord.Rest;

namespace API.BusinessLogic;

public interface IAuthenticationService
{
    string GenerateToken(RestGuildUser guildUser);
}