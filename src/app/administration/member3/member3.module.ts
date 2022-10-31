import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Member3RoutingModule } from './member3-routing.module';
import { ListMemeber3Component } from './list-memeber3/list-memeber3.component';
import { EditMemeber3Component } from './edit-memeber3/edit-memeber3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListMemeber3Component,
    EditMemeber3Component
  ],
  imports: [
    CommonModule,
    Member3RoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class Member3Module { }
