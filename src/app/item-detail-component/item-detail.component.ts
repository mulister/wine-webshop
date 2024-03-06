import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Wine } from '../shared/wine.model';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart-service';
import { appGlobals } from 'src/assets/globals/app.globals';

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
    //this.resetCart();
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
    // this.cartService.addWineToCart(this.wine.id, this.counterValue).subscribe(result => {
    //   console.log("Ok", result);
    // })

    let body = [];
    let jsonString = localStorage.getItem(appGlobals.lsShoppingCart);
    console.log(jsonString);

    if (jsonString || jsonString === ''){
      let object = JSON.parse(jsonString);
      
      object.forEach((wine: Wine) => {
        body.push(wine);
      });
      
      body.push({ wine: this.selectedWine, counter: this.counterValue });
      localStorage.setItem(appGlobals.lsShoppingCart, JSON.stringify(body));

      //this.router.navigate(['/cart']);
      this.dialogRef.close();
    }else{
      body.push({ wine: this.selectedWine, counter: this.counterValue });
      localStorage.setItem(appGlobals.lsShoppingCart, JSON.stringify(body));

      //this.router.navigate(['/cart']);
      this.dialogRef.close();
    }
  }

  resetCart() {
    localStorage.removeItem(appGlobals.lsShoppingCart);
    localStorage.clear();
  }
}
