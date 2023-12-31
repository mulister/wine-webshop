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
    for (let i = 0; i < 6; i++) {
      const wine: Wine = {
        id: i,
        name: "Wine" + i,
        smallDescription: '*dry *red *cheap',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
        price: 19.99,
        image: 'assets/images/Wine bottle.png',
        capacity: '500cl',
        color: 'White',
        type: 'Dry'
      };
      this.items.push(wine)
    }
    for (let i = 0; i < 6; i++) {
      const wine: Wine = {
        id: i,
        name: "Wine" + i,
        smallDescription: '*dry *red *cheap',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
        price: 19.99,
        image: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0047.jpg',
        capacity: '500cl',
        color: 'Red',
        type: 'Wet'
      };
      this.items.push(wine)
    }
    for (let i = 0; i < 4; i++) {
      const wine: Wine = {
        id: i,
        name: "Wine" + i,
        smallDescription: '*dry *red *cheap',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
        price: 27.99,
        image: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0049.jpg',
        capacity: '350cl',
        color: 'Red',
        type: 'Dry'
      };
      this.items.push(wine)
    }
  }

  openWhineDetailScreen(wine: Wine)
  {
    const dialogRef = this.dialog.open(ItemDetailComponent, {
      height: '100%',
      width: '100%',
      data: wine,
      panelClass: 'custom-modalbox',
      backdropClass: 'custom-dialog-backdrop',
    });
  }
}