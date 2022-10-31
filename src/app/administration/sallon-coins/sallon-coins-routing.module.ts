import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSalloncoinComponent } from './add-salloncoin/add-salloncoin.component';
import { EditSalloncoinComponent } from './edit-salloncoin/edit-salloncoin.component';
import { ListSalloncoinComponent } from './list-salloncoin/list-salloncoin.component';

const routes: Routes = [
  {path:'', component: ListSalloncoinComponent},


  {path:'edit/:id', component: EditSalloncoinComponent},

  {path:'add', component: AddSalloncoinComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallonCoinsRoutingModule { }
