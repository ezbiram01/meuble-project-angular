import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditAdminComponent,
    ListAdminComponent,
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
