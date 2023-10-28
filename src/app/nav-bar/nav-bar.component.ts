import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  scrolled: boolean = false;
  prevScrollPosition: number = window.pageYOffset;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const currentScrollPosition = window.pageYOffset;
    this.scrolled = currentScrollPosition > this.prevScrollPosition;
    this.prevScrollPosition = currentScrollPosition;
  }
}
