using Data.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace Data.Services
{
  public class WineService : IWinesService
  {
    WebshopContext _webshopContext;
    public WineService(WebshopContext webshopContext)
    {
      _webshopContext = webshopContext;
    }

    public async Task Create(Wine wine)
    {
      if (string.IsNullOrWhiteSpace(wine.Name))
      {
        throw new ArgumentNullException("Wine name was not entered. It cannot be empty.");
      }

      _webshopContext.Add(wine);

      await _webshopContext.SaveChangesAsync();
    }

    public async Task Delete(int id)
    {
      var wine = _webshopContext.Wines.FirstOrDefault(w => w.Id == id);
      if(wine is  null)
      {
        throw new ArgumentNullException("Wine was found found!");
      }

      _webshopContext.Wines.Remove(wine);

      await _webshopContext.SaveChangesAsync();
    }

    public async Task Edit(Wine wine)
    {
      if (string.IsNullOrWhiteSpace(wine.Name))
      {
        throw new ArgumentNullException("Wine name was not entered. It cannot be empty.");
      }

       var existingWine = _webshopContext.Wines.FirstOrDefault(w => w.Id == wine.Id);

      if (existingWine is null)
      {
        throw new ArgumentNullException("Wine was not found!");
      }

      existingWine.Name = wine.Name;
      existingWine.Price = wine.Price;
      existingWine.Description = wine.Description;
      existingWine.Color = wine.Color;
      existingWine.Type = wine.Type;

      await _webshopContext.SaveChangesAsync();
    }
  }
}
