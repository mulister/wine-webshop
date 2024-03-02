namespace Webshop.Api.Dtos
{
  public class PagedWineDTO
  {
    public int PageIndex { get; set; }
    public int PageSize { get; set; }
    public string? ColorFilter { get; set; }
  }
}
