using Data.Objects;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
  public class WebshopContext : DbContext
  {
    public WebshopContext() { }

    public WebshopContext(DbContextOptions<WebshopContext> options) : base(options)
    {
    }

    public DbSet<Wine> Wines { get; set; }
    public DbSet<WineType> WineTypes { get; set; }
    public DbSet<Award> Awards { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseSqlServer("Server=.;Database=QualityWines;");
      }
    }
  }
}

