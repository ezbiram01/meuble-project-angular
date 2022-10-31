
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [

  {path:'', component: AdministrationComponent, children:[
    

    {path:'categorie', loadChildren:()=> import('./categorie/categorie.module').then(m=>m.CategorieModule)},
    {path:'admin', loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},
    {path:'member1', loadChildren:()=> import('./member1/member1.module').then(m=>m.Member1Module)},
    {path:'member2', loadChildren:()=> import('./member2/member2.module').then(m=>m.Member2Module)},
    {path:'member3', loadChildren:()=> import('./member3/member3.module').then(m=>m.Member3Module)},
    {path:'produit', loadChildren:()=> import('./produit/produit.module').then(m=>m.ProduitModule)},
    
    {path:'g-canape', loadChildren:()=> import('./gestion-canape/gestion-canape.module').then(m=>m.GestionCanapeModule)},
    {path:'g-sallon-canape', loadChildren:()=> import('./sallon-canapes/sallon-canapes.module').then(m=>m.SallonCanapesModule)},
    {path:'g-sallon-coin', loadChildren:()=> import('./sallon-coins/sallon-coins.module').then(m=>m.SallonCoinsModule)},

    {path:'g-Faut', loadChildren:()=> import('./gestion-fautteill/gestion-fautteill.module').then(m=>m.GestionFautteillModule)},
    {path:'g-consolM', loadChildren:()=> import('./gestion-console-m/gestion-console-m.module').then(m=>m.GestionConsoleMModule)},
    {path:'g-consolC', loadChildren:()=> import('./gestion-console-c/gestion-console-c.module').then(m=>m.GestionConsoleCModule)},
    {path:'g-tablie', loadChildren:()=> import('./gestion-table/gestion-table.module').then(m=>m.GestionTableModule)},
    {path:'g-chamber', loadChildren:()=> import('./chamber/chamber.module').then(m=>m.ChamberModule)},
    {path:'g-pouf', loadChildren:()=> import('./pouf/pouf.module').then(m=>m.PoufModule)},
    {path:'g-chaiseL', loadChildren:()=> import('./chaise-l/chaise-l.module').then(m=>m.ChaiseLModule)},




    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
