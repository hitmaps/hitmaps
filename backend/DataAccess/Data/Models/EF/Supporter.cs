using System.ComponentModel.DataAnnotations;

namespace DataAccess.Data.Models.EF;

public class Supporter
{
    public int Id { get; set; }
    [MaxLength(255)]
    public string Name { get; set; } = null!;
    [MaxLength(255)]
    public string? Tier { get; set; }
    public int? Order { get; set; }
    public bool? LegacySupporter { get; set; }
    public decimal? OneTimeContributions { get; set; }
    [MaxLength(1000)]
    public string? Link { get; set; }
    [MaxLength(1000)]
    public string? ImageUrl { get; set; }
    
    /*
     * Tier Orders:
     *   1. Ultimate Idiot Assassin
     *   2. Silent Assassin
     *   3. Master Assassin
     *   4. Assassin
     *   5. Agent
     *   6. Initiate
     */
}