using API.BusinessLogic;
using API.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class NodeController : ApiControllerBase
{
    private readonly INodeService nodeService;

    public NodeController(INodeService nodeService)
    {
        this.nodeService = nodeService;
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
}