import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SallonCoinsRoutingModule } from './sallon-coins-routing.module';
import { ListSalloncoinComponent } from './list-salloncoin/list-salloncoin.component';
import { AddSalloncoinComponent } from './add-salloncoin/add-salloncoin.component';
import { EditSalloncoinComponent } from './edit-salloncoin/edit-salloncoin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListSalloncoinComponent,
    AddSalloncoinComponent,
    EditSalloncoinComponent
  ],
  imports: [
    CommonModule,
    SallonCoinsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class SallonCoinsModule { }
