import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFautteillRoutingModule } from './gestion-fautteill-routing.module';
import { AddFautteilComponent } from './add-fautteil/add-fautteil.component';
import { ListFautteilComponent } from './list-fautteil/list-fautteil.component';
import { EditFautteilComponent } from './edit-fautteil/edit-fautteil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddFautteilComponent,
    ListFautteilComponent,
    EditFautteilComponent
  ],
  imports: [
    CommonModule,
    GestionFautteillRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class GestionFautteillModule { }
