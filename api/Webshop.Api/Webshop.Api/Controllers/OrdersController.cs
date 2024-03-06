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
    public IActionResult Index()
    {
      return Ok();
    }

    [HttpPost]
    public async Task<IActionResult> CreateOrder(Order orderDto)
    {

      if(orderDto.PaymentDetails is null)
      {
        return BadRequest("Payment details are required");
      }

      if(orderDto.ShoppingCart is null)
      {
        return BadRequest("Shopping cart is required");
      }

      if(!orderDto.ShoppingCart.CartItems.Any())
      {
        return BadRequest("No cart items");
      }

      _webshopContext.Orders.Add(orderDto);
      await _webshopContext.SaveChangesAsync();

      return Ok(orderDto);

      return Ok();
    }
  }
}
