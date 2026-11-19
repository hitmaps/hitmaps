namespace API.Controllers.Models;

/// <summary>Payload for the HITMAPS homepage.</summary>
public class HomepageViewModel
{
    public List<GameViewModel> Games { get; set; } = new();
    public List<ElusiveTargetViewModel> ElusiveTargets { get; set; } = new();
    public string Environment { get; set; } = null!;
    public List<SupporterViewModel> HomepageSupporters { get; set; } = new();
}