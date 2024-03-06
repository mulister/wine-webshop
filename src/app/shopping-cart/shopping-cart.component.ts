import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine.model';
import { ShoppingCartService } from '../services/shopping-cart-service';
import { appGlobals } from 'src/assets/globals/app.globals';
import { OrderService } from '../services/order-service';
import { ShoppingCart } from '../shared/shopping-cart.model';
import { Order, PaymentDetails } from '../shared/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private ordersService: OrderService) {

  }

  wines: Wine[] = [];
  uniqueWines: Wine[] = [];
  totalPrice: number = 0;

  userName: string = "";
  email: string = "";
  cardNumber: string = "";
  cardExpiration: string = "";
  cvv: string = "";

  order: Order = {
    id: 0, // Initialize with default values or fetch from a service
    shoppingCart: new ShoppingCart(),
    email: '',
    totalPrice: 0,
    paymentDetails: new PaymentDetails()
    //  {
    //   id: 0,
    //   userName: '',
    //   email: '',
    //   cardExpiration: '',
    //   cardNumber: '',
    //   cvv: ''
    // }
  };  
  shoppingCart: ShoppingCart = new ShoppingCart();

  ngOnInit(): void {
    // this.shoppingCartService.getCart().subscribe(result => {
    //   result.cartItems?.forEach(wine => {
    //     this.wines.push(wine);
    //     console.log("wine", wine);
    //     if (wine.price) {
    //       this.totalPrice += wine.price;
    //     }
    //   })
    // })
    // this.shoppingCartService.getCart().subscribe(result => {
    //   result.cartItems?.forEach(wine => {
    //     this.wines.push(wine);
    //   })
    // })

    let jsonString = localStorage.getItem(appGlobals.lsShoppingCart);

    console.log('jsonString', jsonString);

    if (jsonString) {
      let itemsInCart = JSON.parse(jsonString);
      console.log(itemsInCart);
      itemsInCart.forEach((item: any) => {
        // if(!this.wines.some(wine => wine.id === item.id)){
        this.wines.push(item.wine);
        this.totalPrice += item.wine.price;
        this.shoppingCart.cartItems = this.wines;
        this.shoppingCart.totalPrice = this.totalPrice;
        // }

        this.uniqueWines = this.wines.filter((wine, index, self) =>
          index === self.findIndex((w) => w.id === wine.id)
        );
      });

      console.log('wines', this.wines);
    }
  }

  getWinesCount(selectedWine: Wine){
    console.log("Selected Wine", selectedWine);
    const wines = this.wines.filter(wine => wine.name === selectedWine.name);
    console.log("Filtered wines", wines);
  
    return wines.length;
  }

  public checkOut(){
    console.log("Checkout hit");
    const order: Order = new Order();
    order.paymentDetails = new PaymentDetails();
    order.email = this.email;
    order.totalPrice = this.totalPrice;
    order.paymentDetails.cardExpiration = this.cardExpiration;
    order.paymentDetails.cardNumber = this.cardNumber;
    order.paymentDetails.cvv = this.cvv;
    order.paymentDetails.email = this.email;
    order.paymentDetails.userName = this.userName;
    order.shoppingCart = this.shoppingCart;

    console.log("Order created");
    this.ordersService.createOrder(order).subscribe(result => {
      console.log(result);
      this.router.navigate([`/order-confirmation/${result.id}`]);      
      console.log("Order created succesfully")
    })
  }

  resetCart() {
    localStorage.removeItem(appGlobals.lsShoppingCart);
    localStorage.clear();
  }
}
