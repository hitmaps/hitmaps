using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF.Walkthrough;

public class WalkthroughStep
{
    public int Id { get; set; }
    public Walkthrough Walkthrough { get; set; } = null!;
    [MaxLength(255)]
    public string Title { get; set; } = null!;
    public int Order { get; set; }
    public List<Node> Nodes { get; set; } = [];
}