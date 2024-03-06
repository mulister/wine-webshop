import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order-service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

orderId: number = 0;
order: Order = new Order();

constructor(private route: ActivatedRoute, private orderService: OrderService) {
    
}

ngOnInit(): void {
      this.orderId = this.route.snapshot.params['id'];
      this.getOrder();
      console.log("Order id", this.orderId);
}

getOrder(){
  this.orderService.getOrder(this.orderId).subscribe(result => {
    this.order = result;
    console.log(result);
  })
}
}
