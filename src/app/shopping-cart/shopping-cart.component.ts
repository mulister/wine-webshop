import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

 wines: Wine[] = [];
 totalPrice : number = 0;

  ngOnInit(): void {
    const wine1: Wine = {
      id: 1,
      name: "Wine" + 1,
      smallDescription: '*dry *red *cheap',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
      price: 19.99,
      imageUrl: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0050.jpg',
      capacity: '500cl',
      color: 'White',
      type: 'Dry'
    }; 
    const wine2: Wine = {
      id: 2,
      name: "Wine" + 2,
      smallDescription: '*dry *red *cheap',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
      price: 19.99,
      imageUrl: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0047.jpg',
      capacity: '500cl',
      color: 'Red',
      type: 'Wet'
    };

    this.wines.push(wine1);
    this.wines.push(wine2);

    this.wines.forEach(wine => {
      if(wine.price)
      this.totalPrice += wine.price;
    })
   }
}
