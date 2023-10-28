import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Wine[] = [];

  ngOnInit() {
    for (let i = 0; i < 50; i++) {
      const wine: Wine = {
        name: "Wine1",
        description: "Some description", // Add description and other properties
        price: 19.99,
        image: 'assets/images/Wine bottle.png'
      };
      this.items.push(wine)
    }
  }
}