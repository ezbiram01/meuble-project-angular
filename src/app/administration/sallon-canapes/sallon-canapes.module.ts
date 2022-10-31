import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SallonCanapesRoutingModule } from './sallon-canapes-routing.module';
import { ListSalloncanapeComponent } from './list-salloncanape/list-salloncanape.component';
import { AddSalloncanapeComponent } from './add-salloncanape/add-salloncanape.component';
import { EditSalloncanapeComponent } from './edit-salloncanape/edit-salloncanape.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListSalloncanapeComponent,
    AddSalloncanapeComponent,
    EditSalloncanapeComponent
  ],
  imports: [
    CommonModule,
    SallonCanapesRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class SallonCanapesModule { }
