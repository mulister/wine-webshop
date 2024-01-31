import { Wine } from "./wine.model";

export class ShoppingCart {
    id?: number;
    cartItems?: Wine[];
    userId?: number;
    totalPrice?: number;
  }