import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  private apiUrl = 'https://localhost:7024/api/wines';

  constructor(private httpClient: HttpClient) {}

  // Example method to make a POST request
  createWine(wineData: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, wineData);
  }
}