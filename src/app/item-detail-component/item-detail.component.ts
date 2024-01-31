import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Wine } from '../shared/wine.model';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart-service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css', '../../styles.css']
})
export class ItemDetailComponent implements OnInit  {
  public selectedWine!: Wine;
  constructor(private router: Router, private cartService: ShoppingCartService,
    public dialogRef: MatDialogRef<ItemDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private wine: Wine
  ) { 
    
  }

  ngOnInit(): void {
    this.selectedWine = this.wine;
  }

  closeModal() {
    this.dialogRef.close();
  }
  
  @Input() counterValue: number = 1;
  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counterValue++;
    this.emitCounterValue();
  }

  decrement() {
    if (this.counterValue > 1) {
      this.counterValue--;
      this.emitCounterValue();
    }
  }

  updateCounter(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);

    if (!isNaN(value) && value >= 1) {
      this.counterValue = value;
      this.emitCounterValue();
    }
  }

  private emitCounterValue() {
    this.counterChange.emit(this.counterValue);
  }

  addToCart() {
    // Assuming '/cart' is the route for the cart page
    this.cartService.addWineToCart(this.wine.id).subscribe(result => {
      console.log("Ok", result);
    })

    this.router.navigate(['/cart']);
    this.dialogRef.close();
  }
}
