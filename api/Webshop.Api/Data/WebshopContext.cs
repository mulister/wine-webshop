using Data.Objects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
  internal class WebshopContext : DbContext
  {
    public DbSet<Wine> LegalForms { get; set; }
    public DbSet<WineType> ClosureReasons { get; set; }
    public DbSet<Award> Log { get; set; }
  }
}
