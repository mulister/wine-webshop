import { ShoppingCart } from "./shopping-cart.model";

export class PaymentDetails {
    id?: number;
    userName?: string;
    email?: string;
    cardNumber?: string;
    cardExpiration?: string;
    cvv?: string;
  }
  
 export class Order {
    id?: number;
    shoppingCart?: ShoppingCart; // You need to define the ShoppingCart class or type
    email?: string;
    totalPrice?: number;
    paymentDetails?: PaymentDetails;
  }