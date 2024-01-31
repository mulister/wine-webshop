import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../shared/gallery-item.model';
import { AnnouncementService } from '../services/announcement-service';

@Component({
  selector: 'app-img-gallery',
    templateUrl:'./img-gallery.component.html',
  styleUrls: ['./img-gallery.component.css']
})

export class ImgGalleryComponent implements OnInit {

  constructor(private announcementService: AnnouncementService){

  }

  items: GalleryItem[] = [];

  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startAutoCycle();
    this.announcementService.getAnnouncements().subscribe(result =>{
      result.forEach(item => {
        let galleryItem : GalleryItem = {src: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0005.jpg',
      thumbSrc: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0005.jpg', caption: item.name, description: item.description}
        this.items.push(galleryItem)
      })
    })
  }

  ngOnDestroy(): void {
    this.clearAutoCycle();
  }

  startAutoCycle(): void {
    this.interval = setInterval(() => {
      this.next();
    }, 10000); // 10 seconds interval
  }

  clearAutoCycle(): void {
    clearInterval(this.interval);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}