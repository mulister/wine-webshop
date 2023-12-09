// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class WineService {
//   private apiUrl = 'https://localhost:7024/api/wines';

//   constructor(private httpClient: HttpClient) {}

//   // Example method to make a POST request
//   createWine(wineData: any): Observable<any> {
//     return this.httpClient.post(this.apiUrl, wineData);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wine } from '../shared/wine.model';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  private apiUrl = 'https://localhost:7024/api/wines';

  constructor(private httpClient: HttpClient) {}

  // Example method to make a POST request
  createWine(wineData: any): Observable<any> {
    const wine: {
      id: number;
      name: string;
      type: string;
      color: string;
      description: string;
      awards: [{name: string }];
      price: number;
    } = {
      id: 0,
      name: 'Test Wine',
      type: 'Red Wine',
      color: 'Red',
      description: 'This is a test wine to check the endpoint.',
      awards: [{name: "hello"}],
      price: 10
    };

    const body = JSON.stringify(wine);

    return this.httpClient.post<any>(this.apiUrl, body, { headers: { 'Content-Type': 'application/json' } });
  }
}