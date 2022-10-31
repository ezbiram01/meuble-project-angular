import { ListMemeber3Component } from './list-memeber3/list-memeber3.component';
import { EditMemeber3Component } from './edit-memeber3/edit-memeber3.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: ListMemeber3Component},
  {path:'edit/:id',component:EditMemeber3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Member3RoutingModule { }
