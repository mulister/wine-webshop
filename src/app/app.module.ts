import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ImgGalleryComponent } from './img-gallery/img-gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from '@daelmaak/ngx-gallery';
import { InfographicComponent } from './infographic/infographic.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponentComponent } from './item-detail-component/item-detail-component.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavBarComponent,
    ImgGalleryComponent,
    InfographicComponent,
    ItemListComponent,
    ItemDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
