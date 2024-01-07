import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateWineComponent } from './create-wine/create-wine.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementCreateComponent } from './announcement-create/announcement-create.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'create', component: CreateWineComponent  },
  { path: 'announcement/:id', component: AnnouncementComponent  },
  { path: 'create-announcement', component: AnnouncementCreateComponent  },
  { path: 'cart', component: ShoppingCartComponent  },

  // Define other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
