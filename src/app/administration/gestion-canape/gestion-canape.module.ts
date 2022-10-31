import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCanapeRoutingModule } from './gestion-canape-routing.module';
import { ListCanapeComponent } from './list-canape/list-canape.component';
import { AddCanapeComponent } from './add-canape/add-canape.component';
import { EditCanapeComponent } from './edit-canape/edit-canape.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListCanapeComponent,
    AddCanapeComponent,
    EditCanapeComponent
  ],
  imports: [
    CommonModule,
    GestionCanapeRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class GestionCanapeModule { }
