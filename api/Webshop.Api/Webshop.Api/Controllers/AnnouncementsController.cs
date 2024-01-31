using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Mvc;

namespace Webshop.Api.Controllers
{
  [Route("api/announcements")]
  [ApiController]
  public class AnnouncementsController : ControllerBase
  {
    WebshopContext _webshopContext;
    private readonly IAnnouncementService _announcementService;

    public AnnouncementsController(IAnnouncementService announcementService, WebshopContext context)
    {
      _announcementService = announcementService;
      _webshopContext = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var announcements = _webshopContext.Announcements.ToList();

        return Ok(announcements);

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Wine");
      }
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
