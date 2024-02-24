using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Microsoft.IdentityModel.Tokens;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace API.BusinessLogic.Authentication;

public class AuthenticationService : IAuthenticationService
{
    private readonly IConfiguration configuration;
    private readonly HitmapsDbContext dbContext;
    public const string TopicUserId = "UserId";
    

    public AuthenticationService(IConfiguration configuration, HitmapsDbContext dbContext)
    {
        this.configuration = configuration;
        this.dbContext = dbContext;
    }

    public string GenerateToken(User user)
    {
        return GenerateAccessToken(user);
    }

    private string GenerateAccessToken(User user)
    {
        var issuer = configuration["Jwt:Issuer"];
        var audience = configuration["Jwt:Audience"];
        var key = Encoding.ASCII.GetBytes(configuration["Jwt:Key"]);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim("Id", Guid.NewGuid().ToString()),
                new Claim("DiscordId", user.DiscordId.ToString()),
                new Claim(TopicUserId, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            }),
            Expires = DateTime.UtcNow.AddHours(1),
            Issuer = issuer,
            Audience = audience,
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature)
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }

    public string RefreshToken(int userId)
    {
        var user = dbContext.Users.FirstOrDefault(x => x.Id == userId);
        // ReSharper disable once UseNullPropagation
        if (user == null)
        {
            throw new Exception("Attempted to access an authentication service while unauthenticated");
        }
        
        var newAccessToken = GenerateAccessToken(user);
        return newAccessToken;
    }
}