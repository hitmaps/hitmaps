using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class FloorName
{
    public int Id { get; set; }
    public Mission Mission { get; set; } = null!;
    public int FloorNumber { get; set; }
    [MaxLength(255)]
    public string NameKey { get; set; } = null!;
}