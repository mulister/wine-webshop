using Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Objects
{
  internal class ShoppingCart
  {
    public int Id { get; set; }
    public List<Wine>? CartItems { get; set; }
    public int UserId { get; set; }
    public decimal TotalPrice { get; set; }
  }
}
