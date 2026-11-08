using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class Disguise
{
    public int Id { get; set; }
    public Mission Mission { get; set; } = null!;
    [MaxLength(255)]
    public string Name { get; set; } = null!;
    [MaxLength(255)]
    public string Image { get; set; } = null!;
    public int Order { get; set; }
    public bool Suit { get; set; }
    public List<DisguiseArea> DisguiseAreas { get; set; } = new();
}