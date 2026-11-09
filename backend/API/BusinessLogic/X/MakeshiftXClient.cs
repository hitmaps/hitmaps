using System.Text.Json.Nodes;
using OAuth;

namespace API.BusinessLogic.X;

public class MakeshiftXClient
{
    private readonly HttpClientWrapper httpClientWrapper;
    private readonly IConfiguration configuration;


    public MakeshiftXClient(HttpClientWrapper httpClientWrapper, IConfiguration configuration)
    {
        this.httpClientWrapper = httpClientWrapper;
        this.configuration = configuration;
    }

    public async Task PostToXAsync(string text, long mediaId)
    {
        var client = OAuthRequest.ForProtectedResource(HttpMethod.Post.Method,
            configuration["X:ConsumerKey"],
            configuration["X:ConsumerSecret"],
            configuration["X:AccessToken"],
            configuration["X:AccessTokenSecret"]);
        client.RequestUrl = "https://api.twitter.com/2/tweets";
        var auth = client.GetAuthorizationHeader();

        using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.twitter.com/2/tweets");
        var requestBody = new JsonObject
        {
            ["text"] = text,
            ["media"] = new JsonObject
            {
                ["media_ids"] = new JsonArray(mediaId.ToString())
            }
        };
        request.Content = JsonContent.Create(requestBody);
        request.Headers.Add("Authorization", auth);
        await httpClientWrapper.GetClient().SendAsync(request);
    }
}