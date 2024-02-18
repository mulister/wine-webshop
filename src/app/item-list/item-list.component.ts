import { Component, OnInit, Inject } from '@angular/core';
import { Wine } from '../shared/wine.model';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ItemDetailComponent } from '../item-detail-component/item-detail.component';
import { WineService } from '../services/wine-service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Wine[] = [];
  dialogRef!: MatDialogRef<ItemDetailComponent, any>;

  constructor(private dialog: MatDialog, private wineService: WineService){

  }

  ngOnInit() {

    this.wineService.getWines().subscribe(result => {
      console.log(result);
      this.items = result;
      this.items.forEach(item => {
        item.imageUrl = 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0050.jpg';
      })
    })

    for (let i = 0; i < 6; i++) {
      const wine: Wine = {
        id: i,
        name: "Wine" + i,
        smallDescription: '*dry *red *cheap',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
        price: 19.99,
        imageUrl: 'assets/images/Whine bottle.png',
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
        smallDescription: '*dry *white *cheap',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
        price: 19.99,
        imageUrl: 'assets/images/Whine bottle 3.png',
        capacity: '500cl',
        color: 'White',
        type: 'Wet'
      };
      this.items.push(wine)
    }
    for (let i = 0; i < 4; i++) {
      const wine: Wine = {
        id: i,
        name: "Wine" + i,
        smallDescription: '*Sec *red *Expensive',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", // Add description and other properties
        price: 27.99,
        imageUrl: 'assets/images/Whine bottle 2.png',
        capacity: '350cl',
        color: 'Red',
        type: 'Dry'
      };
      this.items.push(wine)
    }
  }

  openWhineDetailScreen(wine: Wine)
  {
    this.dialogRef = this.dialog.open(ItemDetailComponent, {
      height: '100%',
      width: '100%',
      data: wine,
      panelClass: 'custom-modalbox',
      backdropClass: 'custom-dialog-backdrop',
    });
  }
}