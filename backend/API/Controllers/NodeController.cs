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

    [HttpGet]
    [Route("games/{game}/locations/{location}/missions/{mission}/nodes")]
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
            return NotFound(new
            {
                e.Message
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
}