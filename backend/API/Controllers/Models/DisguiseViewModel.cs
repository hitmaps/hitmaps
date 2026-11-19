using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

/// <summary>A disguise that can be worn on a mission.</summary>
public class DisguiseViewModel
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Image { get; set; } = null!;
    public int Order { get; set; }
    public bool Suit { get; set; }

    public static DisguiseViewModel FromDbModel(Disguise disguise)
    {
        return new DisguiseViewModel
        {
            Id = disguise.Id,
            Name = disguise.Name,
            Image = disguise.Image,
            Order = disguise.Order,
            Suit = disguise.Suit
        };
    }
}