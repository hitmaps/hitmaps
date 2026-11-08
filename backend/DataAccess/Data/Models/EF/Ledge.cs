namespace DataAccess.Data.Models.EF;

public class Ledge
{
    public int Id { get; set; }
    public Mission Mission { get; set; } = null!;
    public int Level { get; set; }
    public List<LedgeVertex> Vertices { get; set; } = null!;
}