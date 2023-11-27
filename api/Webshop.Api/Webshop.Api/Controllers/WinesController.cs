using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Website.Controllers
{
  [ApiController]
  [Produces("application/json")]
  [Route("api/wines")]
  public class RegionsController : Controller
  {
    WebshopContext _webshopContext;
    WineService _wineService;

    public RegionsController(WebshopContext webshopContext, WineService wineService)
    {
      _webshopContext = webshopContext;
      _wineService = wineService;
    }

    [HttpGet]
    public IActionResult Get()
    {
      return Ok(_webshopContext.Wines.ToList());
    }


    [HttpPost]
    public async Task<IActionResult> Create(Wine wine)
    {
      try
      {
        await _wineService.Create(wine);

        return Ok();
      }
      catch(Exception ex)
      {
        return BadRequest($"Something went wrong adding a wine. {ex.Message} ");
      }
    }
  }
}
