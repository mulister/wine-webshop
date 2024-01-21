using Data.Objects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services
{
  public class AwardsService : IAwardService
  {
    WebshopContext _webshopContext;
    public AwardsService(WebshopContext webshopContext)
    {
        _webshopContext = webshopContext;
    }
    public async Task<int> Create(Award award)
    {
      if(string.IsNullOrWhiteSpace(award.Name))
      {
        throw new ArgumentNullException("Award name cannot be empty");
      }

      _webshopContext.Add(award);

      await _webshopContext.SaveChangesAsync();

      return award.Id;
    }

    public async Task Delete(int id)
    {
      var existingAward = _webshopContext.Awards.FirstOrDefaultAsync(a => a.Id == id);
      if(existingAward is null)
      {
        throw new ArgumentNullException($"No award found with id {id}");
      }

      _webshopContext.Remove(existingAward);

      await _webshopContext.SaveChangesAsync();
    }

    public Task Edit(Award award)
    {
      throw new NotImplementedException();
    }
  }
}
