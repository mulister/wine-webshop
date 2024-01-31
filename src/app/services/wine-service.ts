import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  private apiUrl = 'https://localhost:7024/api/wines';

  constructor(private httpClient: HttpClient) {}

  

  // Example method to make a POST request
  createWine(wineData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
  
    const data = {
      "name": "string",
      "type": "string",
      "color": "string",
      "description": "string",
      "awards": [
        {
          "name": "string"
        }
      ],
      "price": 0,
      "imageUrl": "testUrl"
    };
  
    return this.httpClient.post(this.apiUrl, data, { headers });
  }
}