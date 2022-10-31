import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionTableRoutingModule } from './gestion-table-routing.module';
import { AddTableComponent } from './add-table/add-table.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTableComponent,
    EditTableComponent,
    ListTableComponent
  ],
  imports: [
    CommonModule,
    GestionTableRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class GestionTableModule { }
