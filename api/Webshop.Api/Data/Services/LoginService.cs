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
  public class LoginService : ILoginService
  {
    WebshopContext _webshopContext;
    public LoginService(WebshopContext webshopContext)
    {
      _webshopContext = webshopContext;
    }

    public async Task<int> Create(User user)
    {
      if (string.IsNullOrWhiteSpace(user.FirstName))
      {
        throw new ArgumentNullException("Wine name was not entered. It cannot be empty.");
      }

      _webshopContext.Add(user);

      await _webshopContext.SaveChangesAsync();

      return user.Id;
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

    public Task Login(User user)
    {
      throw new NotImplementedException();
    }
  }
}
