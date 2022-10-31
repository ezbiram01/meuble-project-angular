import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionConsoleCRoutingModule } from './gestion-console-c-routing.module';
import { ListConsolcComponent } from './list-consolc/list-consolc.component';
import { AddConsolcComponent } from './add-consolc/add-consolc.component';
import { EditConsolcComponent } from './edit-consolc/edit-consolc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListConsolcComponent,
    AddConsolcComponent,
    EditConsolcComponent
  ],
  imports: [
    CommonModule,
    GestionConsoleCRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class GestionConsoleCModule { }
