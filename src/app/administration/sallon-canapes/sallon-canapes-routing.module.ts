import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSalloncanapeComponent } from './add-salloncanape/add-salloncanape.component';
import { EditSalloncanapeComponent } from './edit-salloncanape/edit-salloncanape.component';
import { ListSalloncanapeComponent } from './list-salloncanape/list-salloncanape.component';

const routes: Routes = [
  {path:'', component: ListSalloncanapeComponent},


  {path:'edit/:id', component: EditSalloncanapeComponent},

  {path:'add', component: AddSalloncanapeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallonCanapesRoutingModule { }
