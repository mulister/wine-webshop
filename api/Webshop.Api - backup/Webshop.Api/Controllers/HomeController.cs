using Microsoft.AspNetCore.Mvc;

namespace Webshop.Api.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index()
    {
      return View();
    }
  }
}
