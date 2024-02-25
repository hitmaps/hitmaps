using API.BusinessLogic;
using API.BusinessLogic.Firebase;
using API.Controllers.Models;
using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Tweetinvi;

namespace API.Batch.PushElusiveTargetStatus;

public class PushElusiveTargetStatus
{
    private readonly HitmapsDbContext dbContext;
    private readonly TwitterClient twitterClient;
    private readonly IFirebaseClient firebaseClient;
    private readonly IImageService imageService;
    private readonly string environment;

    private const string IconUrl = "https://www.hitmaps.com/android-chrome-256x256.png";

    public PushElusiveTargetStatus(HitmapsDbContext dbContext, 
        IConfiguration configuration, 
        IFirebaseClient firebaseClient, 
        IImageService imageService)
    {
        this.dbContext = dbContext;
        this.firebaseClient = firebaseClient;
        this.imageService = imageService;
        environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")?.ToLowerInvariant() ?? "development";
        twitterClient = new TwitterClient(configuration["X:ConsumerKey"],
            configuration["X:ConsumerSecret"],
            configuration["X:AccessToken"],
            configuration["X:AccessTokenSecret"]);
    }

    public async Task ProgramLogicAsync()
    {
        var activeElusiveTargets = dbContext.ElusiveTargets.Where(x => !x.EndNotificationSent).ToList();

        foreach (var elusiveTarget in activeElusiveTargets)
        {
            var currentUtcForNumberOfDays = DateTime.UtcNow.AddDays(-1);

            if (!elusiveTarget.ComingNotificationSent)
            {
                await SendComingNotification(elusiveTarget);
                continue;
            }

            if (DateTime.UtcNow < elusiveTarget.BeginsAt)
            {
                //-- ET is not playable. Don't proceed past here.
                continue;
            }

            var availableDays = (elusiveTarget.EndsAt - currentUtcForNumberOfDays).Days;
            switch (availableDays)
            {
                case > 7 when !elusiveTarget.PlayableNotificationSent:
                    await SendPlayableNotification(elusiveTarget, availableDays);
                    continue;
                case <= 7 and > 5 when !elusiveTarget.SevenDaysLeftNotificationSent:
                    await SendSevenDayNotification(elusiveTarget);
                    continue;
                case <= 5 and > 3 when !elusiveTarget.FiveDaysLeftNotificationSent:
                    await SendFiveDayNotification(elusiveTarget);
                    continue;
                case <= 3 and > 1 when !elusiveTarget.ThreeDaysLeftNotificationSent:
                    await SendThreeDayNotification(elusiveTarget);
                    continue;
                case <= 1 and > 0 when !elusiveTarget.OneDayLeftNotificationSent:
                    await SendOneDayNotification(elusiveTarget);
                    continue;
            }

            if (DateTime.UtcNow > elusiveTarget.EndsAt && !elusiveTarget.EndNotificationSent)
            {
                await SendEndedNotification(elusiveTarget);
            }
        }
    }

    private async Task SendComingNotification(ElusiveTarget elusiveTarget)
    {
        var availableDays = (elusiveTarget.EndsAt - elusiveTarget.BeginsAt).Days;

        var pushNotificationData = new ElusiveTargetPush
        {
            Title = "Elusive Target Arriving",
            Body = $"{elusiveTarget.Name} will arrive on {elusiveTarget.BeginsAt:MMMM dd, yyyy} for {availableDays} days!"
        };
        var firebaseEnvironment = BuildTopicName(environment, "coming");

        if (elusiveTarget.Reactivated)
        {
            pushNotificationData.Title = "Reactivated Elusive Target Arriving";
            pushNotificationData.Body = $"{elusiveTarget.Name} will be reactivated on {elusiveTarget.BeginsAt:MMMM dd, yyyy} for {availableDays} days!";
            firebaseEnvironment = BuildTopicName($"{environment}-reactivation", "coming");
        }

        await SendPushNotification(elusiveTarget, pushNotificationData, firebaseEnvironment);
        // TODO X Post

        elusiveTarget.ComingNotificationSent = true;
        dbContext.Update(elusiveTarget);
        await dbContext.SaveChangesAsync();
    }

    private async Task SendPlayableNotification(ElusiveTarget elusiveTarget, int availableDays)
    {
        var pushNotificationData = new ElusiveTargetPush
        {
            Title = "Elusive Target Arrived",
            Body = $"{elusiveTarget.Name} arrived and will be available for {availableDays} days!",
            ImageUrl = $"https://media.hitmaps.com/img/hitmaps-custom/elusive-target-overlays/composites/{elusiveTarget.Id}-playable.png"
        };
        var firebaseEnvironment = BuildTopicName(environment, "playable");

        if (elusiveTarget.Reactivated)
        {
            pushNotificationData.Title = "Reactivated Elusive Target Arrived";
            firebaseEnvironment = BuildTopicName($"{environment}-reactivation", "playable");
        }

        imageService.BuildCompositeEtImage(
            GetBaseImagePath(elusiveTarget.ImageUrl),
            "mission-active.png",
            $"{elusiveTarget.Id}-playable.png");
        await SendPushNotification(elusiveTarget, pushNotificationData, firebaseEnvironment);
        // TODO X Post

        elusiveTarget.PlayableNotificationSent = true;
        dbContext.Update(elusiveTarget);
        await dbContext.SaveChangesAsync();
    }
    
    private async Task SendSevenDayNotification(ElusiveTarget elusiveTarget)
    {
        var pushNotificationData = new ElusiveTargetPush
        {
            Title = $"{elusiveTarget.Name} - 7 Days Left",
            Body = $"{elusiveTarget.Name} will be leaving in 7 days!  Plan accordingly.",
            ImageUrl = $"https://media.hitmaps.com/img/hitmaps-custom/elusive-target-overlays/composites/{elusiveTarget.Id}-7.png"
        };
        var firebaseEnvironment = BuildTopicName(environment, "7");

        if (elusiveTarget.Reactivated)
        {
            firebaseEnvironment = BuildTopicName($"{environment}-reactivation", "7");
        }

        imageService.BuildCompositeEtImage(
            GetBaseImagePath(elusiveTarget.ImageUrl),
            "7-days-remaining.png",
            $"{elusiveTarget.Id}-7.png");
        await SendPushNotification(elusiveTarget, pushNotificationData, firebaseEnvironment);
        // TODO X Post

        elusiveTarget.SevenDaysLeftNotificationSent = true;
        dbContext.Update(elusiveTarget);
        await dbContext.SaveChangesAsync();
    }
    
    private async Task SendFiveDayNotification(ElusiveTarget elusiveTarget)
    {
        var pushNotificationData = new ElusiveTargetPush
        {
            Title = $"{elusiveTarget.Name} - 5 Days Left",
            Body = $"{elusiveTarget.Name} will be leaving in 5 days.  Be sure to complete the contract before time is up.",
            ImageUrl = $"https://media.hitmaps.com/img/hitmaps-custom/elusive-target-overlays/composites/{elusiveTarget.Id}-5.png"
        };
        var firebaseEnvironment = BuildTopicName(environment, "5");

        if (elusiveTarget.Reactivated)
        {
            firebaseEnvironment = BuildTopicName($"{environment}-reactivation", "5");
        }

        imageService.BuildCompositeEtImage(
            GetBaseImagePath(elusiveTarget.ImageUrl),
            "5-days-remaining.png",
            $"{elusiveTarget.Id}-5.png");
        await SendPushNotification(elusiveTarget, pushNotificationData, firebaseEnvironment);
        // TODO X Post

        elusiveTarget.FiveDaysLeftNotificationSent = true;
        dbContext.Update(elusiveTarget);
        await dbContext.SaveChangesAsync();
    }
    
    private async Task SendThreeDayNotification(ElusiveTarget elusiveTarget)
    {
        var pushNotificationData = new ElusiveTargetPush
        {
            Title = $"{elusiveTarget.Name} - 3 Days Left",
            Body = $"{elusiveTarget.Name} is only active for 3 more days!  Complete the contract before it's too late.",
            ImageUrl = $"https://media.hitmaps.com/img/hitmaps-custom/elusive-target-overlays/composites/{elusiveTarget.Id}-3.png"
        };
        var firebaseEnvironment = BuildTopicName(environment, "3");

        if (elusiveTarget.Reactivated)
        {
            firebaseEnvironment = BuildTopicName($"{environment}-reactivation", "3");
        }

        imageService.BuildCompositeEtImage(
            GetBaseImagePath(elusiveTarget.ImageUrl),
            "3-days-remaining.png",
            $"{elusiveTarget.Id}-3.png");
        await SendPushNotification(elusiveTarget, pushNotificationData, firebaseEnvironment);
        // TODO X Post

        elusiveTarget.ThreeDaysLeftNotificationSent = true;
        dbContext.Update(elusiveTarget);
        await dbContext.SaveChangesAsync();
    }
    
    private async Task SendOneDayNotification(ElusiveTarget elusiveTarget)
    {
        var pushNotificationData = new ElusiveTargetPush
        {
            Title = $"{elusiveTarget.Name} - Only One Day Left",
            Body = $"{elusiveTarget.Name} will be leaving in just 24 hours.  If you have not taken care of {elusiveTarget.Name}, there is not much time left!",
            ImageUrl = $"https://media.hitmaps.com/img/hitmaps-custom/elusive-target-overlays/composites/{elusiveTarget.Id}-1.png"
        };
        var firebaseEnvironment = BuildTopicName(environment, "1");

        if (elusiveTarget.Reactivated)
        {
            firebaseEnvironment = BuildTopicName($"{environment}-reactivation", "1");
        }

        imageService.BuildCompositeEtImage(
            GetBaseImagePath(elusiveTarget.ImageUrl),
            "1-day-remaining.png",
            $"{elusiveTarget.Id}-1.png");
        await SendPushNotification(elusiveTarget, pushNotificationData, firebaseEnvironment);
        // TODO X Post

        elusiveTarget.OneDayLeftNotificationSent = true;
        dbContext.Update(elusiveTarget);
        await dbContext.SaveChangesAsync();
    }
    
    private async Task SendEndedNotification(ElusiveTarget elusiveTarget)
    {
        var pushNotificationData = new ElusiveTargetPush
        {
            Title = $"{elusiveTarget.Name} Has Left",
            Body = $"The contract on {elusiveTarget.Name} has ended."
        };
        var firebaseEnvironment = BuildTopicName(environment, "end");

        if (elusiveTarget.Reactivated)
        {
            firebaseEnvironment = BuildTopicName($"{environment}-reactivation", "end");
        }

        await SendPushNotification(elusiveTarget, pushNotificationData, firebaseEnvironment);
        // TODO X Post

        elusiveTarget.EndNotificationSent = true;
        dbContext.Update(elusiveTarget);
        await dbContext.SaveChangesAsync();
    }

    private static string BuildTopicName(string topic, string suffix)
    {
        return $"hitmaps-{topic}-elusive-target-{suffix}";
    }

    private static string GetBaseImagePath(string imageUrl)
    {
        return imageUrl.Replace("https://media.hitmaps.com/", string.Empty);
    }

    private async Task SendPushNotification(ElusiveTarget target, ElusiveTargetPush pushModel, string firebaseEnvironment)
    {
        pushModel.ImageUrl ??= target.ImageUrl;
        pushModel.IconUrl ??= IconUrl;
        
        await firebaseClient.SendElusiveTargetMessageAsync(firebaseEnvironment, pushModel);
    }
}