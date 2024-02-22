using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface INodeService
{
    Tuple<List<Node>, List<NodeCategory>> GetNodeInfoForMission(string game, string location, string mission);
}