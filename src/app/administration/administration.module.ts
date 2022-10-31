import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdministrationComponent,
  
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class AdministrationModule { }
