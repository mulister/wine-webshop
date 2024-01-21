using Data.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services
{
  public interface IShoppingCartService
  {
    Task<int> Create(ShoppingCart shoppingCart);
    Task Delete(int id);
    Task Edit(ShoppingCart shoppingCart);
  }
}
