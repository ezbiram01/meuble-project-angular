import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPoufComponent } from './add-pouf/add-pouf.component';
import { EditPoufComponent } from './edit-pouf/edit-pouf.component';
import { ListPoufComponent } from './list-pouf/list-pouf.component';

const routes: Routes = [
  {path:'', component: ListPoufComponent},
  {path:'edit/:id', component: EditPoufComponent},
  {path:'add', component: AddPoufComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoufRoutingModule { }
