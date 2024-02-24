using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class FloorNameViewModel
{
    public int Id { get; set; }
    public int FloorNumber { get; set; }
    public string NameKey { get; set; } = null!;

    public static FloorNameViewModel FromDbModel(FloorName floorName)
    {
        return new FloorNameViewModel
        {
            Id = floorName.Id,
            FloorNumber = floorName.FloorNumber,
            NameKey = floorName.NameKey
        };
    }
}