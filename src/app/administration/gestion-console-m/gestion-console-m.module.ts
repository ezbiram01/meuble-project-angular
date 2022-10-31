import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionConsoleMRoutingModule } from './gestion-console-m-routing.module';
import { AddConsolMComponent } from './add-consol-m/add-consol-m.component';
import { EditConsolMComponent } from './edit-consol-m/edit-consol-m.component';
import { ListConsolMComponent } from './list-consol-m/list-consol-m.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddConsolMComponent,
    EditConsolMComponent,
    ListConsolMComponent
  ],
  imports: [
    CommonModule,
    GestionConsoleMRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class GestionConsoleMModule { }
