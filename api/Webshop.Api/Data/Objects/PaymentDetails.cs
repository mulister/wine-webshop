using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Objects
{
  public class PaymentDetails
  {
    public int Id { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string CardNumber { get; set; }
    public string CardExpiration { get; set; }
    public string Cvv { get; set; }
  }
}
