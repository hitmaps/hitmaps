using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class DisguiseAreaVertex
{
    public int Id { get; set; }
    public DisguiseArea DisguiseArea { get; set; } = null!;
    [MaxLength(30)] 
    public string Latitude { get; set; } = null!;
    [MaxLength(30)] 
    public string Longitude { get; set; } = null!;
}