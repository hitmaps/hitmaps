namespace DataAccess.Data.Models.EF;

public class Location
{
    public int Id { get; set; }
    public Game Game { get; set; } = null!;
    public string Destination { get; set; } = null!;
    public string DestinationCountry { get; set; } = null!;
    public int Order { get; set; }
    public string Slug { get; set; } = null!;
    public string BackgroundUrl { get; set; } = null!;
}