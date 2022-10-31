import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Member1RoutingModule } from './member1-routing.module';
import { ListMemeber1Component } from './list-memeber1/list-memeber1.component';
import { EditMemeber1Component } from './edit-memeber1/edit-memeber1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListMemeber1Component,
    EditMemeber1Component
  ],
  imports: [
    CommonModule,
    Member1RoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class Member1Module { }
