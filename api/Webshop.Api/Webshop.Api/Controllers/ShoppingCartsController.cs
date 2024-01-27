using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Mvc;

namespace Webshop.Api.Controllers
{
  [Route("api/shoppingCart")]
  [ApiController]
  public class ShoppingCartsController : ControllerBase
  {
    private readonly IShoppingCartService _shoppingCartService;

    public ShoppingCartsController(IShoppingCartService shoppingCartService)
    {
      _shoppingCartService = shoppingCartService;
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
