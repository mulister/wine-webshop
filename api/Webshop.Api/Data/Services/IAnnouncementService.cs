using Data.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services
{
  public interface IAnnouncementService
  {
    Task<int> Create(Announcement announcement);
    Task Delete(int id);
    Task Edit(Announcement announcement);
  }
}
