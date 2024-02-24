using API.Controllers.RequestModels.Nodes;
using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface INodeService
{
    Tuple<List<Node>, List<NodeCategory>> GetNodeInfoForMission(string game, string location, string mission);
    Node CreateNode(CreateEditNodeModel createNodeModel);
    Node EditNode(int nodeId, CreateEditNodeModel editNodeModel);
    void DeleteNode(int nodeId);
}