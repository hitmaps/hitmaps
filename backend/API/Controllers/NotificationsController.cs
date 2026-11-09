using API.BusinessLogic.Firebase;
using API.Controllers.RequestModels;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class NotificationsController : ApiControllerBase
{
    private IFirebaseClient firebaseClient;

    public NotificationsController(IFirebaseClient firebaseClient)
    {
        this.firebaseClient = firebaseClient;
    }

    [HttpPost]
    [Route("notifications")]
    public async Task<IActionResult> UpdateNotificationStatus(
        [FromBody] NotificationRequestModel notificationRequestModel)
    {
        if (!notificationRequestModel.IsStateValid())
        {
            return BadRequest(new
            {
                Message = "Invalid state provided."
            });
        }

        if (notificationRequestModel.State == NotificationRequestModel.StateSubscribing)
        {
            await firebaseClient.SubscribeToTopicAsync(notificationRequestModel.Topic, notificationRequestModel.Token);
        }
        else
        {
            await firebaseClient.UnsubscribeFromTopicAsync(notificationRequestModel.Topic,
                notificationRequestModel.Token);
        }

        return NoContent();
    }
}