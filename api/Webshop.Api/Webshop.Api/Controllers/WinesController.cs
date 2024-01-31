using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webshop.Api.Controllers
{
  [Route("api/wines")]
  [ApiController]
  public class WinesController : ControllerBase
  {
    WebshopContext _webshopContext;
    private readonly IWinesService _winesService;

    public WinesController(IWinesService winesService, WebshopContext context)
    {
      _winesService = winesService;
      _webshopContext = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var wines = _webshopContext.Wines.ToList();

        return Ok(wines);

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Wine");
      }
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Wine wine)
    {
      try
      {
        await _winesService.Create(wine);

        return Ok();

      }
      catch(Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Wine");
      }
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        await _winesService.Delete(id);

        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Wine");
      }
    }
  }
}
