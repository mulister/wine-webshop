using Data;
using Data.Objects;
using Data.Services;
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

    public WinesController(IWinesService winesService)
    {
      _winesService = winesService;
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
