namespace DataAccess.Data.Models.EF;

public class Foliage
{
    public int Id { get; set; }
    public Mission Mission { get; set; } = null!;
    public int Level { get; set; }
    public List<FoliageVertex> Vertices { get; set; } = null!;
}