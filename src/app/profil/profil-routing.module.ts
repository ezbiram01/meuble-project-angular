import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnciendonnesComponent } from './anciendonnes/anciendonnes.component';
import { MesdonnesComponent } from './mesdonnes/mesdonnes.component';
import { NewdonnesComponent } from './newdonnes/newdonnes.component';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
  {path:'', component: ProfilComponent, children:[
    {path:'donnes', component: MesdonnesComponent}, 
    {path:'anciendonnes', component: AnciendonnesComponent}, 
    {path:'newdonnes', component: NewdonnesComponent}, 




  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
