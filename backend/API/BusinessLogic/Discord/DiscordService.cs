using System.Net;
using System.Net.Http.Headers;
using System.Text.Json;
using Discord;
using Discord.Rest;

namespace API.BusinessLogic.Discord;

public class DiscordService : IDiscordService
{
    private readonly IConfiguration configuration;
    private readonly HttpClientWrapper httpClientWrapper;
    private DiscordRestClient? client = null;
    private ExpirableEntry<RestGuild>? guildCache = null;
    private readonly object lockObject = new();
    private const ulong GuildId = 514289597652402187;
    private const ulong EditorRoleId = 888429526676279328;

    public DiscordService(HttpClientWrapper httpClientWrapper, IConfiguration configuration)
    {
        this.httpClientWrapper = httpClientWrapper;
        this.configuration = configuration;
    }

    public async Task<string?> VerifyTokenAsync(string tokenType, string token)
    {
        using var request = new HttpRequestMessage(HttpMethod.Get, "https://discordapp.com/api/v9/users/@me");
        request.Headers.Authorization = new AuthenticationHeaderValue(tokenType, token);
        var response = await httpClientWrapper.GetClient().SendAsync(request);

        if (response.StatusCode != HttpStatusCode.OK)
        {
            return null;
        }

        return JsonSerializer.Deserialize<User>(await response.Content.ReadAsStreamAsync(), new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        })?.Id;
    }

    public async Task<RestGuildUser?> VerifyServerMembershipAndEditorRoleAsync(ulong discordSnowflake)
    {
        var guild = await GetGuildInformationAsync();
        var user = await guild.GetUserAsync(discordSnowflake);

        if (user != null &&
            user.RoleIds.Contains(EditorRoleId))
        {
            return user;
        }

        return null;
    }

    private async Task<RestGuild> GetGuildInformationAsync()
    {
        return await FetchInLock(async () =>
        {
            if (guildCache != null && !guildCache.IsExpired())
            {
                return guildCache.Value;
            }

            var guild = await (await GetClientAsync()).GetGuildAsync(GuildId);

            guildCache = new ExpirableEntry<RestGuild>(guild, TimeSpan.FromMinutes(10));

            return guild;
        });
    }
    
    private T FetchInLock<T>(Func<T> function)
    {
        lock (lockObject)
        {
            return function.Invoke();
        }
    }
    
    private async Task<DiscordRestClient> GetClientAsync()
    {
        // ReSharper disable once InvertIf
        if (client == null)
        {
            client = new DiscordRestClient();
            await client.LoginAsync(TokenType.Bot, configuration["DiscordBotToken"]);
        }

        return client;
    }
}