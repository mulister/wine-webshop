using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Website.Controllers
{
  [ApiController]
  [Produces("application/json")]
  [Route("api/wines")]
  public class WinesController : Controller
  {
    //private readonly WebshopContext _webshopContext;
    //wineservice _wineservice;

    public WinesController(
      //WebshopContext webshopContext,
      )
    {
      //_webshopContext = webshopContext;
      //_wineService = wineService;
    }

    //[HttpGet]
    //public IActionResult Get()
    //{
    //  return Ok(_webshopContext.Wines.ToList());
    //}


    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Wine wine)
    {
      try
      {
        WebshopContext context = new WebshopContext();
        WineService wineService = new WineService(context);
        await wineService.Create(wine);

        return Ok();
      }
      catch(Exception ex)
      {
        return BadRequest($"Something went wrong adding a wine. {ex.Message} ");
      }
    }
  }
}
