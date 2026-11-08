using DataAccess.Data.Models.EF;

namespace API.BusinessLogic.Authentication;

public interface IAuthenticationService
{
    string GenerateToken(User guildUser);
    string RefreshToken(int userId);
}