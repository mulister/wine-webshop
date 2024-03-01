import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../services/announcement-service';
import { Announcement } from '../shared/announcement.model';

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
  announcement: Announcement = new Announcement;
  constructor(private route: ActivatedRoute, private announcementService: AnnouncementService) {
    
  }
  ngOnInit(): void {
    this.announcementId = this.route.snapshot.params['id'];

    this.announcementService.getAnnouncement(this.announcementId).subscribe(result => {
      this.announcement = result
    })

    if(this.announcementId == 0){
      this.imageUrl ='https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0005.jpg';
    }
    else if(this.announcementId == 1){
      this.imageUrl = 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0002.jpg';
    }
    else{
      this.imageUrl ='https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0005.jpg';
    }
  }
}
