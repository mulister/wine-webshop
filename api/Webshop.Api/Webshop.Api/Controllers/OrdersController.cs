using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

    [HttpGet]  
    [Route("{id}")]
    public async Task<IActionResult> GetOrder(int id)
    {
      return Ok(_webshopContext.Orders.Include(order => order.PaymentDetails).Include(o => o.ShoppingCart).ThenInclude(sp => sp.CartItems).FirstOrDefault(order => order.Id == id));
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


        Order newOrder = new Order
        {
          Email = orderDto.Email,
          PaymentDetails = orderDto.PaymentDetails,
          ShoppingCart = orderDto.ShoppingCart,
          TotalPrice = orderDto.TotalPrice
        };

        newOrder.ShoppingCart.CartItems = new List<Wine>();
        foreach(var wine in orderDto.ShoppingCart.CartItems)
        {
          if (!newOrder.ShoppingCart.CartItems.Contains(wine))
          {
            newOrder.ShoppingCart.CartItems.Add(wine);
          }
        }

        _webshopContext.Orders.Add(newOrder);

        //foreach (Wine wine in orderDto.ShoppingCart.CartItems)
        //{
        //  wine.Stock--;
        //}
        await _webshopContext.SaveChangesAsync();

        return Ok(newOrder);
      }
      catch (Exception ex)
      {
        return BadRequest($"Something went wrong, {ex.Message}");
      }
    }
  }
}
