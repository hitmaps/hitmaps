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
    public DbSet<Disguise> Disguises { get; set; }
    public DbSet<DisguiseArea> DisguiseAreas { get; set; }
    public DbSet<Ledge> Ledges { get; set; }
    public DbSet<Foliage> Foliage { get; set; }
    public DbSet<Template> Templates { get; set; }
    public DbSet<Icon> Icons { get; set; }
    public DbSet<ElusiveTarget> ElusiveTargets { get; set; }
    public DbSet<User> Users { get; set; }

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
        modelBuilder.Entity<Disguise>().ToTable("Disguise");
        modelBuilder.Entity<DisguiseArea>().ToTable("DisguiseArea");
        modelBuilder.Entity<DisguiseAreaVertex>().ToTable("DisguiseAreaVertex");
        modelBuilder.Entity<Ledge>().ToTable("Ledge");
        modelBuilder.Entity<LedgeVertex>().ToTable("LedgeVertex");
        modelBuilder.Entity<Foliage>().ToTable("Foliage");
        modelBuilder.Entity<FoliageVertex>().ToTable("FoliageVertex");
        modelBuilder.Entity<Template>().ToTable("Template");
        modelBuilder.Entity<Icon>().ToTable("Icon");
        modelBuilder.Entity<ElusiveTarget>().ToTable("ElusiveTarget");
        modelBuilder.Entity<FloorName>().ToTable("FloorName");
        modelBuilder.Entity<User>().ToTable("User");
    }
}