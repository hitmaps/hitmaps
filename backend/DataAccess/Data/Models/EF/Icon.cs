using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class Icon
{
    public int Id { get; set; }
    [MaxLength(255)]
    public string IconName { get; set; } = null!;
    [MaxLength(255)]
    public string AltText { get; set; } = null!;
    [MaxLength(255)]
    public string Group { get; set; } = null!;
    public int Order { get; set; }
}