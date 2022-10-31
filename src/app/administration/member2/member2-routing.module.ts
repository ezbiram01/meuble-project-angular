import { EditMemeber2Component } from './edit-memeber2/edit-memeber2.component';
import { ListMemeber2Component } from './list-memeber2/list-memeber2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: ListMemeber2Component},
  {path:'edit/:id',component:EditMemeber2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Member2RoutingModule { }
