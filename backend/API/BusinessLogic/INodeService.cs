using DataAccess.Data.Models.EF;

namespace API.BusinessLogic;

public interface INodeService
{
    List<Node> GetNodesForMission(string game, string location, string mission);
}