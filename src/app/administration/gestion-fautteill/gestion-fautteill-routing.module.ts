import { ListFautteilComponent } from './list-fautteil/list-fautteil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFautteilComponent } from './edit-fautteil/edit-fautteil.component';
import { AddFautteilComponent } from './add-fautteil/add-fautteil.component';

const routes: Routes = [
  {path:'', component: ListFautteilComponent},
  {path:'edit/:id', component: EditFautteilComponent},

  {path:'add', component: AddFautteilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFautteillRoutingModule { }
