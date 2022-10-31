import { EditConsolMComponent } from './edit-consol-m/edit-consol-m.component';
import { ListConsolMComponent } from './list-consol-m/list-consol-m.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCanapeComponent } from '../gestion-canape/edit-canape/edit-canape.component';
import { AddConsolMComponent } from './add-consol-m/add-consol-m.component';

const routes: Routes = [
  {path:'', component: ListConsolMComponent},
  {path:'edit/:id', component: EditConsolMComponent},

  {path:'add', component: AddConsolMComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionConsoleMRoutingModule { }
