import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Member2RoutingModule } from './member2-routing.module';
import { EditMemeber2Component } from './edit-memeber2/edit-memeber2.component';
import { ListMemeber2Component } from './list-memeber2/list-memeber2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditMemeber2Component,
    ListMemeber2Component
  ],
  imports: [
    CommonModule,
    Member2RoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class Member2Module { }
