using Data.Objects;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services
{
  public interface IWinesService
  {
    Task<int> Create(Wine wine);
    Task Delete(int id);
    Task Edit(Wine wine);
    Task<List<Wine>> GetPagedWines(int pageIndex, int pageSize, string? color);
  }
}
