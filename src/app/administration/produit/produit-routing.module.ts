import { ListProduitComponent } from './list-produit/list-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCanapeComponent } from '../gestion-canape/list-canape/list-canape.component';

const routes: Routes = [
  {path:'', component: ListProduitComponent},


  {path:'edit/:id', component: EditProduitComponent},

  {path:'add', component: AddProduitComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
