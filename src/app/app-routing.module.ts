import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './list/item/details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'items/:id',
    component: DetailsComponent
  },
  {
    path: 'items',
    component: ListComponent
  },
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
