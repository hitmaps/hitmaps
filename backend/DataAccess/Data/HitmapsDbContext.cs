using DataAccess.Data.Models.EF;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data;

public class HitmapsDbContext : DbContext
{
    public HitmapsDbContext(DbContextOptions<HitmapsDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<Game> Games { get; set; }
    public DbSet<Location> Locations { get; set; }
    public DbSet<Mission> Missions { get; set; }
    public DbSet<Node> Nodes { get; set; }
    public DbSet<NodeCategory> NodeCategories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Game>().ToTable("Game");
        modelBuilder.Entity<Location>().ToTable("Location");
        modelBuilder.Entity<Mission>().ToTable("Mission");
        modelBuilder.Entity<MissionVariant>().ToTable("MissionVariant");
        modelBuilder.Entity<Node>().ToTable("Node")
            .HasMany(x => x.Variants)
            .WithMany(x => x.Nodes)
            .UsingEntity<NodeToMissionVariant>(
                l => l.HasOne<MissionVariant>().WithMany().HasForeignKey(e => e.VariantId).OnDelete(DeleteBehavior.Restrict),
                r => r.HasOne<Node>().WithMany().HasForeignKey(e => e.NodeId).OnDelete(DeleteBehavior.Restrict)
            );
        modelBuilder.Entity<NodeNote>().ToTable("NodeNote");
        modelBuilder.Entity<NodeCategory>().ToTable("NodeCategory");
    }
}