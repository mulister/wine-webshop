import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ItemDetailComponent } from './item-detail-component/item-detail.component';
import { CreateWineComponent } from './create-wine/create-wine.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'create', component: CreateWineComponent  },

  { path: 'item-detail', component: ItemDetailComponent, data: { title: 'Employee list' } }
  // Define other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
