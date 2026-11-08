using DataAccess.Data.Models.EF;
using Discord.Rest;

namespace API.BusinessLogic;

public interface IUserService
{
    User GetUser(RestGuildUser discordId);
}