import { ListMemeber1Component } from './list-memeber1/list-memeber1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMemeber1Component } from './edit-memeber1/edit-memeber1.component';

const routes: Routes = [
  {path:'', component: ListMemeber1Component},
  {path:'edit/:id',component:EditMemeber1Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Member1RoutingModule { }
