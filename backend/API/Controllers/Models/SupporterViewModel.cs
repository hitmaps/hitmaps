using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class SupporterViewModel
{
    public string Name { get; set; } = null!;
    public string? Tier { get; set; }
    public bool? LegacySupporter { get; set; }
    public decimal? OneTimeContributions { get; set; }
    public string? Link { get; set; }
    public string? ImageUrl { get; set; }
    public bool RecurringContributor => Tier != null;

    public static SupporterViewModel FromDbModel(Supporter dbModel)
    {
        return new SupporterViewModel
        {
            Name = dbModel.Name,
            Tier = dbModel.Tier,
            LegacySupporter = dbModel.LegacySupporter,
            OneTimeContributions = dbModel.OneTimeContributions,
            Link = dbModel.Link,
            ImageUrl = dbModel.ImageUrl
        };
    }
}