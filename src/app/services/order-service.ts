import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Wine } from '../shared/wine.model';
import { Announcement } from '../shared/announcement.model';
import { ShoppingCart } from '../shared/shopping-cart.model';
import { Order } from '../shared/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'https://localhost:7024/api/orders';

  constructor(private httpClient: HttpClient) {}
  
  getOrders(): Observable<Order> {
    return this.httpClient.get<Order>(this.apiUrl);
  }

  createOrder(order: Order): Observable<Order> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      return this.httpClient.post<Order>(this.apiUrl, order, { headers });
  }


}