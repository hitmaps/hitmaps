using System.Globalization;
using API.Controllers.RequestModels.Nodes;
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

    public Node CreateNode(CreateEditNodeModel createNodeModel)
    {
        return TransformAndPersist(createNodeModel);
    }

    private Node TransformAndPersist(CreateEditNodeModel nodeModel, Node? existingNode = null)
    {
        var mission = dbContext.Missions
            .Include(x => x.Variants)
            .First(x => x.Id == nodeModel.MissionId);
        
        var node = existingNode ?? new Node();
        node.Group = nodeModel.Category.Group.Trim();
        node.Subgroup = nodeModel.Category.Subgroup;
        node.Icon = nodeModel.Icon;
        node.Latitude = nodeModel.Latitude.ToString(CultureInfo.InvariantCulture);
        node.Level = nodeModel.Level;
        node.Longitude = nodeModel.Longitude.ToString(CultureInfo.InvariantCulture);
        node.Mission = mission;
        node.Name = nodeModel.Name?.Trim() ?? string.Empty;
        node.Type = nodeModel.Category.Type;
        node.Target = nodeModel.TargetAction;
        node.Searchable = nodeModel.Category.Searchable;
        node.Image = nodeModel.Image;
        node.Quantity = nodeModel.Quantity ?? 1;
        node.Variants = mission.Variants.Where(x => nodeModel.VariantIds.Contains(x.Id)).ToList();
        node.Notes = nodeModel.Notes.Where(x => x.Text != null).Select(x => new NodeNote
        {
            Text = x.Text!,
            Type = x.Type
        }).ToList();
        
        if (node.Image != null && !node.Image.StartsWith("https://media.hitmaps.com"))
        {
            node.Image = null;
        }

        dbContext.Update(node);
        dbContext.SaveChanges();
        return node;
    }

    public Node EditNode(int nodeId, CreateEditNodeModel editNodeModel)
    {
        var node = dbContext.Nodes
            .Include(x => x.Variants)
            .Include(x => x.Notes)
            .First(x => x.Id == nodeId);
        node.Variants.Clear();
        node.Notes.Clear();
        
        return TransformAndPersist(editNodeModel, node);
    }
}