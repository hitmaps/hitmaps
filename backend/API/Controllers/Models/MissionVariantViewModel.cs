namespace API.Controllers.Models;

public class MissionVariantViewModel
{
    public int Id { get; set; }
    public int MissionId { get; set; }
    public string Name { get; set; } = null!;
    public bool Visible { get; set; }
    public string Icon { get; set; } = null!;
    public string Slug { get; set; } = null!;
    public bool Default { get; set; }
}