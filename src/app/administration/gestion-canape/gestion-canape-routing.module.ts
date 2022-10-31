import { AddCanapeComponent } from './add-canape/add-canape.component';
import { EditCanapeComponent } from './edit-canape/edit-canape.component';
import { ListCanapeComponent } from './list-canape/list-canape.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: ListCanapeComponent},
  {path:'edit/:id', component: EditCanapeComponent},

  {path:'add', component: AddCanapeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCanapeRoutingModule { }
