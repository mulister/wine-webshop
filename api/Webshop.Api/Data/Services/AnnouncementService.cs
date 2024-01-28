using Data.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services
{
  public class AnnouncementService : IAnnouncementService
  {

    WebshopContext _webshopContext;

    public AnnouncementService(WebshopContext webshopContext)
    {
      _webshopContext = webshopContext;
    }

    public async Task<int> Create(Announcement announcement)
    {
      if (string.IsNullOrWhiteSpace(announcement.Name))
      {
        throw new ArgumentNullException("Announcement name was not entered. It cannot be empty.");
      }

      if (string.IsNullOrWhiteSpace(announcement.Description))
      {
        throw new ArgumentNullException("Announcement description was not entered. It cannot be empty.");
      }

      _webshopContext.Add(announcement);

      await _webshopContext.SaveChangesAsync();

      return announcement.Id;
    }

    public async Task Delete(int id)
    {
      var announcement = _webshopContext.Announcements.FirstOrDefault(w => w.Id == id);
      if (announcement is null)
      {
        throw new ArgumentNullException("Announcement was found found!");
      }

      _webshopContext.Announcements.Remove(announcement);

      await _webshopContext.SaveChangesAsync();
    }

    public async Task Edit(Announcement announcement)
    {
      var existingAnnouncement = _webshopContext.Announcements.FirstOrDefault(w => w.Id == announcement.Id);

      if (existingAnnouncement is null)
      {
        throw new ArgumentNullException("Announcement was not found!");
      }

      if (string.IsNullOrWhiteSpace(announcement.Name))
      {
        throw new ArgumentNullException("Announcement name was not entered. It cannot be empty.");
      }

      if (string.IsNullOrWhiteSpace(announcement.Description))
      {
        throw new ArgumentNullException("Announcement description was not entered. It cannot be empty.");
      }

      existingAnnouncement.Name = announcement.Name;
      existingAnnouncement.Description = announcement.Description;

      await _webshopContext.SaveChangesAsync();
    }
  }
}
