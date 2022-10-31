import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', component: ListCategorieComponent},
  {path:'add', component: AddCategorieComponent},
  {path:'edit/:id',component:EditCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
