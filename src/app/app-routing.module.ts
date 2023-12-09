import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ItemDetailComponent } from './item-detail-component/item-detail.component';

const routes: Routes = [
  { path: 'item-detail', component: ItemDetailComponent, data: { title: 'Employee list' } }
  // Define other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
