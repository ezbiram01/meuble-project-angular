import { AddChamberComponent } from './add-chamber/add-chamber.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditChamberComponent } from './edit-chamber/edit-chamber.component';
import { ListChamberComponent } from './list-chamber/list-chamber.component';

const routes: Routes = [
  
  {path:'', component: ListChamberComponent},
  {path:'edit/:id', component: EditChamberComponent},

  {path:'add', component: AddChamberComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamberRoutingModule { }
