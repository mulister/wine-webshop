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
import { ItemDetailComponent } from './item-detail-component/item-detail.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CreateWineComponent } from './create-wine/create-wine.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementCreateComponent } from './announcement-create/announcement-create.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login-page/login-page.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

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
    HomeComponent,
    AnnouncementComponent,
    AnnouncementCreateComponent,
    ShoppingCartComponent,
    AboutUsComponent,
    LoginComponent,
    StockListComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryComponent,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
