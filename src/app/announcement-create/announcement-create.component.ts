import { Component } from '@angular/core';
import { Announcement } from '../shared/announcement.model';
import { AnnouncementService } from '../services/announcement-service';

@Component({
  selector: 'app-announcement-create',
  templateUrl: './announcement-create.component.html',
  styleUrls: ['./announcement-create.component.css']
})
export class AnnouncementCreateComponent {
  announcement: Announcement = new Announcement();

  constructor(private announcementService: AnnouncementService){
  }

  createAnnouncement(){
    this.announcementService.createAnnouncement(this.announcement).subscribe(result => {
      console.log("OK",result);
    })
  }
}
