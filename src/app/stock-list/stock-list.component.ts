import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine-service';
import { Wine } from '../shared/wine.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ItemDetailComponent } from '../item-detail-component/item-detail.component';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  items: Wine[] = [];
  PageIndex: number = 0;
  pageSize: number = 12;
  colorFilter: string = "";
  dialogRef!: MatDialogRef<ItemDetailComponent, any>;


  constructor(private wineService: WineService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.fetchWines();
  }

  fetchWines(): void {
    this.wineService.getWines().subscribe(result =>
      this.items = result
    )
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
