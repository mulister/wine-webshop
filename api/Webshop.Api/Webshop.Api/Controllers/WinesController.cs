using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Drawing;
using Webshop.Api.Dtos;

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
        var wineImages = new List<string>
        {
            "https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0049.jpg",
            "https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0050.jpg",
            "https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0048.jpg",
        };

        Random random = new Random();
        int randomIndex = random.Next(wineImages.Count);

        wine.ImageUrl = wineImages[randomIndex];
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


    [HttpGet]
    public async Task<IActionResult> GetPagedWines(PagedWineDTO dto)
    {
      try
      {
        var pagedWines = await _winesService.GetPagedWines(dto.PageIndex, dto.PageSize, dto.ColorFilter);

        return Ok(pagedWines);

      }
      catch (Exception ex)
      {
        return BadRequest("Something went wrong attempting to add the Wine");
      }
    }

  }
}
}
