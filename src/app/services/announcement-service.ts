import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Wine } from '../shared/wine.model';
import { Announcement } from '../shared/announcement.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private apiUrl = 'https://localhost:7024/api/announcements';

  constructor(private httpClient: HttpClient) {}


  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.apiUrl);
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