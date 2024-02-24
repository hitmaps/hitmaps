namespace API.BusinessLogic;

public class HttpClientWrapper
{
    private readonly HttpClient _httpClient;

    public HttpClientWrapper()
    {
        _httpClient = new HttpClient();
    }

    public HttpClient GetClient()
    {
        return _httpClient;
    }
}