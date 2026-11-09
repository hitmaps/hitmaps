using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class IconViewModel
{
    public int Id { get; set; }
    public string Icon { get; set; } = null!;
    public string AltText { get; set; } = null!;
    public string Group { get; set; } = null!;
    public int Order { get; set; }

    public static IconViewModel FromDbModel(Icon icon)
    {
        return new IconViewModel
        {
            Id = icon.Id,
            Icon = icon.IconName,
            AltText = icon.AltText,
            Group = icon.Group,
            Order = icon.Order
        };
    }
}