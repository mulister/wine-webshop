using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webshop.Api.Controllers
{
  [Route("api/awards")]
  [ApiController]
  public class AwardsController : ControllerBase
  {
    WebshopContext _webshopContext;
    private readonly IAwardService _awardsService;

    public AwardsController(IAwardService awardsService)
    {
      _awardsService = awardsService;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Award award)
    {
      try
      {
        await _awardsService.Create(award);

        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Award");
      }
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        await _awardsService.Delete(id);

        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Award");
      }
    }
  }
}
