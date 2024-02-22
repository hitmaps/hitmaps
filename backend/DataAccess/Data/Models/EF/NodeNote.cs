using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class NodeNote
{
    public int Id { get; set; }
    public Node Node { get; set; } = null!;
    [MaxLength(15)]
    public string Type { get; set; } = null!;

    public string Text { get; set; } = null!;
}