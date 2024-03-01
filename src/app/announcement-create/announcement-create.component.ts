import { Component } from '@angular/core';
import { Announcement } from '../shared/announcement.model';
import { AnnouncementService } from '../services/announcement-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement-create',
  templateUrl: './announcement-create.component.html',
  styleUrls: ['./announcement-create.component.css']
})
export class AnnouncementCreateComponent {
  announcement: Announcement = new Announcement();

  constructor(private announcementService: AnnouncementService, private router: Router){
  }

  createAnnouncement(){
    this.announcementService.createAnnouncement(this.announcement).subscribe(result => {
      console.log("OK",result);
      this.router.navigate(['/']);
    })
  }
}
