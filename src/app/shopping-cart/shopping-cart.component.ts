import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine.model';
import { ShoppingCartService } from '../services/shopping-cart-service';
import { appGlobals } from 'src/assets/globals/app.globals';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {

  }

  wines: Wine[] = [];
  uniqueWines: Wine[] = [];
  totalPrice: number = 0;

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

  resetCart() {
    localStorage.removeItem(appGlobals.lsShoppingCart);
    localStorage.clear();
  }
}
