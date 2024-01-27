using Data.Objects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services
{
  public class ShoppingCartService : IShoppingCartService
  {
    WebshopContext _webshopContext;
    public ShoppingCartService(WebshopContext webshopContext)
    {
        _webshopContext = webshopContext;
    }
    public async Task<int> Create(ShoppingCart shoppingCart)
    {
      var existingCart = await _webshopContext.ShoppingCarts.FirstOrDefaultAsync(s => s.UserId == shoppingCart.UserId);
      if (existingCart != null)
      {
        throw new ArgumentException($"Shopping cart already exists for user with id {shoppingCart.UserId}");
      }

      _webshopContext.Add(shoppingCart);

      await _webshopContext.SaveChangesAsync();

      return shoppingCart.Id;
    }

    public async Task Delete(int id)
    {
      var existingCart = await _webshopContext.ShoppingCarts.FirstOrDefaultAsync(s => s.Id == id);
      if (existingCart is null)
      {
        throw new ArgumentException($"No shopping cart found with id {id}");
      }

      _webshopContext.Remove(existingCart);

      await _webshopContext.SaveChangesAsync();
    }

    public Task Edit(ShoppingCart shoppingCart)
    {
      //To be implemented, once ShoppingCart logic is worked out.
      throw new NotImplementedException();
    }
  }
}
