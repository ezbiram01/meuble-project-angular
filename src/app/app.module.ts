import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModelproduitComponent } from './modelproduit/modelproduit.component';
import { ConceptionComponent } from './conception/conception.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AccueilComponent } from './accueil/accueil.component';
import { PorteMonteauComponent } from './porte-monteau/porte-monteau.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SalonsComponent } from './canape/salons.component';
import { Sallon1Component } from './salloncanape/sallon1.component';
import { FautteilleComponent } from './fautteille/fautteille.component';
import { SallonCoinComponent } from './sallon-coin/sallon-coin.component';
import { ConsoleModerneComponent } from './console-moderne/console-moderne.component';
import { ConsoleTradionalComponent } from './console-tradional/console-tradional.component';
import { TableComponent } from './table/table.component';
import { PoufComponent } from './pouf/pouf.component';
import { ChaiseLongueComponent } from './chaise-longue/chaise-longue.component';
import { ShoeRackComponent } from './shoe-rack/shoe-rack.component';
import { ChambersComponent } from './chambers/chambers.component';
import { ForgetComponent } from './forget/forget.component';
import { DetaileMembreComponent } from './detaile-membre/detaile-membre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ModelproduitComponent,
    ConceptionComponent,
    ContactComponent,
    AboutComponent,
    PorteMonteauComponent,
    LoginComponent,
    RegisterComponent,
    SalonsComponent,
    Sallon1Component,
    FautteilleComponent,
    SallonCoinComponent,
    ConsoleModerneComponent,
    ConsoleTradionalComponent,
    TableComponent,
    PoufComponent,
    ChaiseLongueComponent,
    ShoeRackComponent,
    ChambersComponent,
    ForgetComponent,
    DetaileMembreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
     
    ToastrModule.forRoot(), // ToastrModule added

    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')

}
