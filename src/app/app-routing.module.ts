import { ConsoleTradionalComponent } from './console-tradional/console-tradional.component';
import { SalonsComponent } from './canape/salons.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConceptionComponent } from './conception/conception.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModelproduitComponent } from './modelproduit/modelproduit.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PorteMonteauComponent } from './porte-monteau/porte-monteau.component';
import { Sallon1Component } from './salloncanape/sallon1.component';
import { FautteilleComponent } from './fautteille/fautteille.component';
import { SallonCoinComponent } from './sallon-coin/sallon-coin.component';
import { ConsoleModerneComponent } from './console-moderne/console-moderne.component';
import { TableComponent } from './table/table.component';
import { PoufComponent } from './pouf/pouf.component';
import { ChaiseLongueComponent } from './chaise-longue/chaise-longue.component';
import { ChambersComponent } from './chambers/chambers.component';
import { ForgetComponent } from './forget/forget.component';
import { DetaileMembreComponent } from './detaile-membre/detaile-membre.component';

const routes: Routes = [
  {path:'', component: AccueilComponent}, 
  {path:'header', component: HeaderComponent}, 
  {path:'footer', component: FooterComponent}, 
  {path:'model', component: ModelproduitComponent}, 
  {path:'conception', component: ConceptionComponent},
  {path:'contact', component: ContactComponent}, 
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'forget', component: ForgetComponent},

  {path:'membre', component: DetaileMembreComponent},

  {path:'poufs', component: PoufComponent}, 
  {path:'porte', component: PorteMonteauComponent}, 
  {path:'canape', component: SalonsComponent}, 
  {path:'salloncoin', component: SallonCoinComponent}, 
  {path:'salloncanapee', component: Sallon1Component}, 
  {path:'fauteile', component: FautteilleComponent}, 
  {path:'consoleModerne', component: ConsoleModerneComponent}, 
  {path:'consoleTraditional', component: ConsoleTradionalComponent}, 
  {path:'table', component: TableComponent}, 
  {path:'chaiseLon', component: ChaiseLongueComponent}, 
  {path:'chambres', component: ChambersComponent}, 









  {path:'admin', loadChildren:()=> import('./administration/administration.module').then(m=>m.AdministrationModule)},

  {path:'profil', loadChildren:()=> import('./profil/profil.module').then(m=>m.ProfilModule)},



  





 

 

  










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
