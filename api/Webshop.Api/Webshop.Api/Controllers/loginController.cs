using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webshop.Api.Controllers
{
  [Route("api/login")]
  [ApiController]
  public class LoginController : ControllerBase
  {
    WebshopContext _webshopContext;

    public LoginController()
    {
     
    }

    [HttpPost]
    [Route("/UserCreate")]
    public async Task<IActionResult> Create([FromBody] User user)
    {
      try
      {
        

        return Ok();

      }
      catch(Exception ex)
      {
        return BadRequest("Something went wrong attempting to create user");
      }
    }

    [HttpDelete]
    [Route("/UserDelete")]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        

        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to delete user");
      }
    }

    [HttpPost]
    [Route("/UserLogin")]
    public async Task<IActionResult> Login([FromBody] User user)
    {
      try
      {
        

        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to login the user");
      }
    }
  }
}
