import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine.model';
import { ShoppingCartService } from '../services/shopping-cart-service';
import { appGlobals } from 'src/assets/globals/app.globals';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  constructor(private shoppingCartService: ShoppingCartService){

  }

 wines: Wine[] = [];
 totalPrice : number = 0;

  ngOnInit(): void {
    this.shoppingCartService.getCart().subscribe(result => {
      result.cartItems?.forEach(wine => {
        this.wines.push(wine);
        console.log("wine", wine);
        if(wine.price){
          this.totalPrice += wine.price;
        }
      })
    })
    // this.shoppingCartService.getCart().subscribe(result => {
    //   result.cartItems?.forEach(wine => {
    //     this.wines.push(wine);
    //   })
    // })
    
    let jsonString = localStorage.getItem(appGlobals.lsShoppingCart);

    console.log('jsonString', jsonString);

    if(jsonString){
      let itemsInCart = JSON.parse(jsonString);

      console.log(itemsInCart);
      itemsInCart.forEach((item: any) => {
        this.wines.push(item.wine);
      });


      console.log('wines', this.wines);
    }
    // const wine1: Wine = {
    //   id: 1,
    //   name: "Wine" + 1,
    //   smallDescription: '*dry *red *cheap',
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
    //   price: 19.99,
    //   imageUrl: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0050.jpg',
    //   capacity: '500cl',
    //   color: 'White',
    //   type: 'Dry'
    // }; 
    // const wine2: Wine = {
    //   id: 2,
    //   name: "Wine" + 2,
    //   smallDescription: '*dry *red *cheap',
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
    //   price: 19.99,
    //   imageUrl: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0047.jpg',
    //   capacity: '500cl',
    //   color: 'Red',
    //   type: 'Wet'
    // };

    // this.wines.push(wine1);
    // this.wines.push(wine2);
   }
}
