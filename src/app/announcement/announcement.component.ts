import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit
 {
  /**
   *
   */
  announcementId: number = 0;
  imageUrl: string = "";
  constructor(private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.announcementId = this.route.snapshot.params['id'];

    if(this.announcementId == 0){
      this.imageUrl ='https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0005.jpg';
    }
    if(this.announcementId == 1){
      this.imageUrl = 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0002.jpg';
    }
  }
}
