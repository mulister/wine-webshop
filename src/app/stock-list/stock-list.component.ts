import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine-service';
import { Wine } from '../shared/wine.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  Wines: Wine[] = [];
  PageIndex: number = 0;
  pageSize: number = 12;
  colorFilter: string = "";

  constructor(wineService: WineService) {

  }

  ngOnInit(): void {

  }

  fetchWines(): void {
    wineService.
}
}