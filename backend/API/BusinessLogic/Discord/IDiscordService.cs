using Discord.Rest;

namespace API.BusinessLogic.Discord;

public interface IDiscordService
{
    Task<string?> VerifyTokenAsync(string tokenType, string token);
    Task<RestGuildUser?> VerifyServerMembershipAndEditorRoleAsync(ulong discordSnowflake);
}