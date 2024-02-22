using DataAccess.Data;
using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

namespace API.BusinessLogic;

public class NodeService : INodeService
{
    private readonly HitmapsDbContext dbContext;

    public NodeService(HitmapsDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public Tuple<List<Node>, List<NodeCategory>> GetNodeInfoForMission(string game, string location, string mission)
    {
        var missionData = dbContext.Missions.FirstOrDefault(x => x.Slug == mission && 
                                                        x.Location.Slug == location && 
                                                        x.Location.Game.Slug == game);
        if (missionData == null)
        {
            throw new MissionNotFoundException(mission);
        }
        
        //@formatter:off
        var nodes = dbContext.Nodes
            .Include(x => x.Notes)
            .Include(x => x.Mission)
            .Include(x => x.Variants)
            .Where(x => x.Mission.Id == missionData.Id)
            .ToList();
        //@formatter:on
        var nodeCategories = dbContext.NodeCategories
            .Where(x => x.ForSniperAssassin == (missionData.MissionType == Mission.MissionTypeSniperAssassin) &&
                                              x.ForMission == (missionData.MissionType != Mission.MissionTypeSniperAssassin)).ToList();

        return new Tuple<List<Node>, List<NodeCategory>>(nodes, nodeCategories);
    }
}