import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Wine } from '../shared/wine.model';
import { Announcement } from '../shared/announcement.model';
import { ShoppingCart } from '../shared/shopping-cart.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private apiUrl = 'https://localhost:7024/api/shoppingCart';

  constructor(private httpClient: HttpClient) {}

  getCart(): Observable<ShoppingCart> {
    return this.httpClient.get<ShoppingCart>(this.apiUrl);
  }

  addWineToCart(wineId: number): Observable<ShoppingCart> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });
      return this.httpClient.post<ShoppingCart>(`${this.apiUrl}/wine/${wineId}`, null, { headers });  }

  
  getAnnouncement(id: number): Observable<Announcement> {
    return this.httpClient.get<Announcement>(this.apiUrl + "/" + id);
  }

  // Example method to make a POST requestw
  createAnnouncement(announcement: Announcement): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    announcement.imageUri = "Testingurl.com";

    return this.httpClient.post(this.apiUrl, announcement, { headers });
  }
}