import { AddTableComponent } from './add-table/add-table.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', component: ListTableComponent},


  {path:'edit/:id', component: EditTableComponent},

  {path:'add', component: AddTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionTableRoutingModule { }
