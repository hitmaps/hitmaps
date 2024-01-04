using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data;

public class HitmapsDbContext : DbContext
{
    public HitmapsDbContext(DbContextOptions<HitmapsDbContext> options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //-- TODO EF model building
    }
}