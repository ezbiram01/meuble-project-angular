import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditCategorieComponent,
    AddCategorieComponent,
    ListCategorieComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class CategorieModule { }
