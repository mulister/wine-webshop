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

  items: GalleryItem[] = [
    // {
    //   src: 'src\app\img-gallery\img-gallery.component.css',
    //   thumbSrc:
    //     'src\app\img-gallery\img-gallery.component.css',
    // },
    // {
    //   src: 'https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg',
    //   thumbSrc:
    //     'https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg',
    // },
    {
      src: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0005.jpg',
      thumbSrc:
        'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0005.jpg',
        description: "First announcement description",
        caption: "First annoucement title"
    },
    {
      src: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0002.jpg',
      thumbSrc:
        'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0002.jpg',
        description: "Second announcement description",
        caption: "Second annoucement title"
    },
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startAutoCycle();
    this.announcementService.getAnnouncements().subscribe(result =>{
      result.forEach(item => {
        let galleryItem : GalleryItem = {src: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0005.jpg',
      thumbSrc: 'https://qualitywines.blob.core.windows.net/quality-wines-images/IMG-20231106-WA0005.jpg', caption: item.name, description: item.description }
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