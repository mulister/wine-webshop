import { Component, OnInit, Inject } from '@angular/core';
import { Wine } from '../shared/wine.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ItemDetailComponent } from '../item-detail-component/item-detail.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Wine[] = [];

  constructor(private dialog: MatDialog){

  }

  ngOnInit() {
    for (let i = 0; i < 15; i++) {
      const wine: Wine = {
        id: i,
        name: "Wine" + i,
        description: "Some description", // Add description and other properties
        price: 19.99,
        image: 'assets/images/Wine bottle.png'
      };
      this.items.push(wine)
    }
  }

  openWhineDetailScreen(wine: Wine)
  {
    const dialogRef = this.dialog.open(ItemDetailComponent, {
      height: '400px',
      width: '600px',
      data: wine
    });
  }
}