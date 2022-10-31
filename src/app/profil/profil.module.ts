import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { MesdonnesComponent } from './mesdonnes/mesdonnes.component';
import { AnciendonnesComponent } from './anciendonnes/anciendonnes.component';
import { NewdonnesComponent } from './newdonnes/newdonnes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfilComponent,
    MesdonnesComponent,
    AnciendonnesComponent,
    NewdonnesComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class ProfilModule { }
