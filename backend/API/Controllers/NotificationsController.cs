using API.BusinessLogic.Firebase;
using API.Controllers.Models;
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

    /// <summary>Subscribes or unsubscribes a device token to an elusive-target notification topic.</summary>
    /// <param name="notificationRequestModel">
    /// <c>state</c> is <c>SUBSCRIBING</c> or <c>UNSUBSCRIBING</c>.
    /// <c>topic</c> is the Firebase topic. <c>token</c> is the device token.
    /// </param>
    /// <response code="204">The subscription was updated.</response>
    /// <response code="400"><c>state</c> is not <c>SUBSCRIBING</c> or <c>UNSUBSCRIBING</c>.</response>
    [HttpPost]
    [Route("notifications")]
    [Tags("Notifications")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType<MessageResponse>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> UpdateNotificationStatus(
        [FromBody] NotificationRequestModel notificationRequestModel)
    {
        if (!notificationRequestModel.IsStateValid())
        {
            return BadRequest(new MessageResponse
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