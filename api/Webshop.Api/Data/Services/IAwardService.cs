using Data.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services
{
  public interface IAwardService
  {
    Task<int> Create(Award award);
    Task Delete(int id);
    Task Edit(Award award);
  }
}
