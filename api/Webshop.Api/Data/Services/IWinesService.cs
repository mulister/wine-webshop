using Data.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services
{
  public interface IWinesService
  {
    Task Create(Wine wine);
    Task Delete(int id);
  }
}
