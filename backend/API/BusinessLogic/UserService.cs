using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Discord.Rest;

namespace API.BusinessLogic;

public class UserService : IUserService
{
    private readonly HitmapsDbContext dbContext;

    public UserService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public User GetUser(RestGuildUser discordUser)
    {
        var user = dbContext.Users.FirstOrDefault(x => x.DiscordId == discordUser.Id);
        // ReSharper disable once InvertIf
        if (user == null)
        {
            user = new User
            {
                DiscordId = discordUser.Id
            };
            dbContext.Update(user);
            dbContext.SaveChanges();
        }

        return user;
    }
}