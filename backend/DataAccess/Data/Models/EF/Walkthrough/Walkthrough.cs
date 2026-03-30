using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF.Walkthrough;

public class Walkthrough
{
    public int Id { get; set; }
    public MissionVariant MissionVariant { get; set; } = null!;
    [MaxLength(255)]
    public string Name { get; set; } = null!;
}