using API.BusinessLogic;
using API.BusinessLogic.Authentication;
using API.Controllers.Models;
using API.Controllers.RequestModels.Nodes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.JsonWebTokens;

namespace API.Controllers;

public class NodeController : ApiControllerBase
{
    private readonly INodeService nodeService;
    private readonly IAuthenticationService authenticationService;

    public NodeController(INodeService nodeService, IAuthenticationService authenticationService)
    {
        this.nodeService = nodeService;
        this.authenticationService = authenticationService;
    }

    /// <summary>Lists map markers and marker categories for a mission.</summary>
    /// <param name="game">Game slug, such as <c>hitman3</c>.</param>
    /// <param name="location">Location slug, such as <c>paris</c>.</param>
    /// <param name="mission">Mission slug.</param>
    /// <response code="200">Markers and the categories used to group them.</response>
    /// <response code="404">No mission matches the slug.</response>
    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/nodes")]
    [Tags("Map")]
    [ProducesResponseType<MissionNodesViewModel>(StatusCodes.Status200OK)]
    [ProducesResponseType<MessageResponse>(StatusCodes.Status404NotFound)]
    public IActionResult GetNodes(string game, string location, string mission)
    {
        try
        {
            var nodeInfo = nodeService.GetNodeInfoForMission(game, location, mission);
            return Ok(new MissionNodesViewModel
            {
                Categories = nodeInfo.Item2.Select(NodeCategoryViewModel.FromDbModel).ToList(),
                Nodes = nodeInfo.Item1.Select(NodeViewModel.FromDbModel).ToList()
            });
        }
        catch (MissionNotFoundException e)
        {
            return NotFound(new MessageResponse
            {
                Message = e.Message
            });
        }
    }

    [Authorize]
    [HttpPost]
    [Route("nodes")]
    public IActionResult CreateNode([FromBody] CreateEditNodeModel createNodeModel)
    {
        var node = nodeService.CreateNode(createNodeModel);

        return Ok(new AuthenticatedViewModel<NodeViewModel>
        {
            Data = NodeViewModel.FromDbModel(node),
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }

    [Authorize]
    [HttpPut]
    [Route("nodes/{nodeId:int}")]
    public IActionResult EditNode([FromBody] CreateEditNodeModel editNodeModel, int nodeId)
    {
        var node = nodeService.EditNode(nodeId, editNodeModel);
        
        return Ok(new AuthenticatedViewModel<NodeViewModel>
        {
            Data = NodeViewModel.FromDbModel(node),
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }

    [Authorize]
    [HttpDelete]
    [Route("nodes/{nodeId:int}")]
    public IActionResult DeleteNode(int nodeId)
    {
        nodeService.DeleteNode(nodeId);
        return Ok(new AuthenticatedViewModel<dynamic>
        {
            Data = new
            {
                Message = "Node deleted!"
            },
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }

    [Authorize]
    [HttpPatch]
    [Route("nodes/{nodeId:int}")]
    public IActionResult MoveNode([FromRoute] int nodeId, [FromBody] MoveNodeModel moveNodeModel)
    {
        nodeService.MoveNode(nodeId, moveNodeModel);
        return Ok(new AuthenticatedViewModel<dynamic>
        {
            Data = new
            {
                Message = "OK"
            },
            Token = authenticationService.RefreshToken(GetCurrentUserId())
        });
    }
}