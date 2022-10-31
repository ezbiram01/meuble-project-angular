import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamberRoutingModule } from './chamber-routing.module';
import { AddChamberComponent } from './add-chamber/add-chamber.component';
import { EditChamberComponent } from './edit-chamber/edit-chamber.component';
import { ListChamberComponent } from './list-chamber/list-chamber.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddChamberComponent,
    EditChamberComponent,
    ListChamberComponent
  ],
  imports: [
    CommonModule,
    ChamberRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class ChamberModule { }
