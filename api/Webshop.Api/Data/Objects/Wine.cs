using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Objects
{
  public class Wine
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Type { get; set; }
    public string Color { get; set; }
    public string Description { get; set; }
    public List<Award> Awards { get; set; }
    public int Price { get; set; }
  }
}
