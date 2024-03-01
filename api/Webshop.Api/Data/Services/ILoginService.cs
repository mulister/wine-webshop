using Data;
using Data.Objects;
using Data.Services;

namespace Data.Services
{
  public interface ILoginService
  {
    Task<int> Create(User user);
    Task Delete(int id);
    Task Login(User user);}
}
