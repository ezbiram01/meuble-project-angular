import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChaiseComponent } from './add-chaise/add-chaise.component';
import { EditChaiseComponent } from './edit-chaise/edit-chaise.component';
import { ListChaiseComponent } from './list-chaise/list-chaise.component';

const routes: Routes = [
  
  {path:'', component: ListChaiseComponent},
  {path:'edit/:id', component: EditChaiseComponent},

  {path:'add', component: AddChaiseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaiseLRoutingModule { }
