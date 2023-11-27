using Data.Objects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
  public class WebshopContext : DbContext
  {
    public DbSet<Wine> Wines { get; set; }
    public DbSet<WineType> WineTypes { get; set; }
    public DbSet<Award> Awards { get; set; }
  }
}
