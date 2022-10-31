import { AddConsolcComponent } from './add-consolc/add-consolc.component';
import { ListConsolcComponent } from './list-consolc/list-consolc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCanapeComponent } from '../gestion-canape/edit-canape/edit-canape.component';

const routes: Routes = [
  {path:'', component: ListConsolcComponent},
  {path:'edit/:id', component: EditCanapeComponent},

  {path:'add', component: AddConsolcComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionConsoleCRoutingModule { }
