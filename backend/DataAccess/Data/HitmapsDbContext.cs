using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data;

public class HitmapsDbContext : DbContext
{
    public HitmapsDbContext(DbContextOptions<HitmapsDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<Game> Games { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Game>().ToTable("Game");
        modelBuilder.Entity<Location>().ToTable("Location");
        modelBuilder.Entity<Mission>().ToTable("Mission");
    }
}