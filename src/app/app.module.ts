import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ImgGalleryComponent } from './img-gallery/img-gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from '@daelmaak/ngx-gallery';
import { InfographicComponent } from './infographic/infographic.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail-component/item-detail.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CreateWineComponent } from './create-wine/create-wine.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavBarComponent,
    ImgGalleryComponent,
    InfographicComponent,
    ItemListComponent,
    ItemDetailComponent,
    CreateWineComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryComponent,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ItemDetailComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap { 

  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const injectorObj = {
      injector: this.injector
    };
    // Customers
    customElements.define('customers-angular', createCustomElement(ItemDetailComponent, injectorObj));
  }
}
