import { ShoppingCart } from "./shopping-cart.model";

class PaymentDetails {
    Id: number;
    UserName: string;
    Email: string;
    CardNumber: string;
    CardExpiration: string;
    Cvv: string;
  
    constructor(
      id: number,
      userName: string,
      email: string,
      cardNumber: string,
      cardExpiration: string,
      cvv: string
    ) {
      this.Id = id;
      this.UserName = userName;
      this.Email = email;
      this.CardNumber = cardNumber;
      this.CardExpiration = cardExpiration;
      this.Cvv = cvv;
    }
  }
  
  class Order {
    Id: number;
    ShoppingCart: ShoppingCart; // You need to define the ShoppingCart class or type
    Email: string;
    TotalPrice: number;
    PaymentDetails: PaymentDetails;
  
    constructor(
      id: number,
      shoppingCart: ShoppingCart,
      email: string,
      totalPrice: number,
      paymentDetails: PaymentDetails
    ) {
      this.Id = id;
      this.ShoppingCart = shoppingCart;
      this.Email = email;
      this.TotalPrice = totalPrice;
      this.PaymentDetails = paymentDetails;
    }
  }