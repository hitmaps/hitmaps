using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

/// <summary>A note attached to a map marker.</summary>
public class NodeNoteViewModel
{
    public int Id { get; set; }
    public string Type { get; set; } = null!;
    public string Text { get; set; } = null!;

    public static NodeNoteViewModel FromDbModel(NodeNote note)
    {
        return new NodeNoteViewModel
        {
            Id = note.Id,
            Type = note.Type,
            Text = note.Text
        };
    }
}