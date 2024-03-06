using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Mvc;

namespace Webshop.Api.Controllers
{
  [Route("api/orders")]
  [ApiController]
  public class OrdersController : ControllerBase
  {
    WebshopContext _webshopContext;
    private readonly IWinesService _winesService;

    public OrdersController(IWinesService winesService, WebshopContext context)
    {
      _winesService = winesService;
      _webshopContext = context;
    }


    [HttpGet]
    public async Task<IActionResult> GetOrders()
    {
      return Ok(_webshopContext.Orders.ToList());
    }

    [HttpPost]
    public async Task<IActionResult> CreateOrder([FromBody] Order orderDto)
    {

      try
      {
        if (orderDto.PaymentDetails is null)
        {
          return BadRequest("Payment details are required");
        }

        if (orderDto.ShoppingCart is null)
        {
          return BadRequest("Shopping cart is required");
        }

        if (!orderDto.ShoppingCart.CartItems.Any())
        {
          return BadRequest("No cart items");
        }

        _webshopContext.Orders.Add(orderDto);
        foreach (Wine wine in orderDto.ShoppingCart.CartItems)
        {
          wine.Stock--;
        }
        await _webshopContext.SaveChangesAsync();

        return Ok(orderDto);
      }
      catch (Exception ex)
      {
        return BadRequest($"Something went wrong, {ex.Message}");
      }
    }
  }
}
