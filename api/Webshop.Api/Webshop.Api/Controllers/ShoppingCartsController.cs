using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Webshop.Api.Controllers
{
  [Route("api/shoppingCart")]
  [ApiController]
  public class ShoppingCartsController : ControllerBase
  {
    private readonly IShoppingCartService _shoppingCartService;
    private WebshopContext _webshopContext;
    public ShoppingCartsController(IShoppingCartService shoppingCartService, WebshopContext context)
    {
      _shoppingCartService = shoppingCartService;
      _webshopContext = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var cart = _webshopContext.ShoppingCarts.Include(c => c.CartItems).First();

        return Ok(cart);

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Wine");
      }
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] ShoppingCart cart)
    {
      try
      {
        await _shoppingCartService.Create(cart);

        return Ok(cart);

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Shopping Cart");
      }
    }

    [HttpPost]
    [Route("wine/{id}")]
    public async Task<IActionResult> AddWineToCart(int id)
    {
      try
      {
        var wine = _webshopContext.Wines.FirstOrDefault(w => w.Id == id);
        if (wine is not null)
        {
          var cart = _webshopContext.ShoppingCarts.First();
          if (cart is not null)
          {
            if (cart.CartItems is not null)
            {
              cart.CartItems.Add(wine);
            }
            else
            {
              cart.CartItems = new List<Wine> { wine };
            }
            await _webshopContext.SaveChangesAsync();
          }
        }

        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Shopping Cart");
      }
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        await _shoppingCartService.Delete(id);

        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Shopping Cart");
      }
    }
  }
}
