import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaiseLRoutingModule } from './chaise-l-routing.module';
import { EditChaiseComponent } from './edit-chaise/edit-chaise.component';
import { AddChaiseComponent } from './add-chaise/add-chaise.component';
import { ListChaiseComponent } from './list-chaise/list-chaise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditChaiseComponent,
    AddChaiseComponent,
    ListChaiseComponent
  ],
  imports: [
    CommonModule,
    ChaiseLRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class ChaiseLModule { }
