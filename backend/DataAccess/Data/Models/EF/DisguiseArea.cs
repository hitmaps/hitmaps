using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class DisguiseArea
{
    public const string TypeTrespassing = "trespassing";
    public const string TypeHostile = "hostile";
    
    public int Id { get; set; }
    public Disguise Disguise { get; set; } = null!;
    public int Level { get; set; }
    [MaxLength(11)] 
    public string Type { get; set; } = null!;
    public List<DisguiseAreaVertex> Vertices { get; set; } = new();
}