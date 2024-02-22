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
            return Ok(new MissionNodesViewModel
            {
                Categories = new List<object>(),
                Nodes = nodeService.GetNodesForMission(game, location, mission)
                    .Select(NodeViewModel.FromDbModel)
                    .ToList()
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