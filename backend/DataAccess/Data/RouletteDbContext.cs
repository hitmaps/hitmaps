using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data;

public class RouletteDbContext : DbContext
{
    public RouletteDbContext(DbContextOptions<RouletteDbContext> options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //-- TODO EF model building
    }
}