import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Wine } from '../shared/wine.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit  {
  public selectedWine!: Wine;
  constructor(
    public dialogRef: MatDialogRef<ItemDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private wine: Wine
  ) { 
    
  }

  ngOnInit(): void {
    this.selectedWine = this.wine;
  }
}
