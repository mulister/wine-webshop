using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webshop.Api.Controllers
{
  [Route("api/announcements")]
  [ApiController]
  public class AnnouncementsController : ControllerBase
  {
    private readonly IAnnouncementService _announcementService;

    public AnnouncementsController(IAnnouncementService announcementService)
    {
      _announcementService = announcementService;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Announcement announcement)
    {
      try
      {
        await _announcementService.Create(announcement);

        return Ok(announcement);

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Announcement");
      }
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        await _announcementService.Delete(id);

        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to delete the Announcement");
      }
    }
  }
}
