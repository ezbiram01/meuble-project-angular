import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoufRoutingModule } from './pouf-routing.module';
import { ListPoufComponent } from './list-pouf/list-pouf.component';
import { AddPoufComponent } from './add-pouf/add-pouf.component';
import { EditPoufComponent } from './edit-pouf/edit-pouf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListPoufComponent,
    AddPoufComponent,
    EditPoufComponent
  ],
  imports: [
    CommonModule,
    PoufRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class PoufModule { }
