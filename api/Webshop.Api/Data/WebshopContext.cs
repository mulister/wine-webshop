using Data.Objects;
using Microsoft.EntityFrameworkCore;

namespace Data
{
  public class WebshopContext : DbContext
  {
    public WebshopContext(DbContextOptions<WebshopContext> options) : base(options)
    {
    }

    public DbSet<Wine> Wines { get; set; }
    public DbSet<WineType> WineTypes { get; set; }
    public DbSet<Award> Awards { get; set; }
    public DbSet<Announcement> Announcements { get; set; }
    public DbSet<ShoppingCart> ShoppingCarts { get; set; }



    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseSqlServer("Server=.;Database=QualityWines;Integrated Security=True;");
      }
    }
  }
}
