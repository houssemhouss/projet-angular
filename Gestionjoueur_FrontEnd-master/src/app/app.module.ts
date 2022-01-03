import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BuggysComponent } from './Joueur/joueurs.component';
import { AddBuggyComponent } from './add-Joueur/add-Joueur.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { UpdateBuggyComponent } from './update-Joueur/update-joueur.component';
import { MarquesComponent } from './equipes/equipes.omponent';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { UpdateMarqueComponent } from './update-equipe/update-equipe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParMarqueComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
@NgModule({
  declarations: [
    AppComponent,
    BuggysComponent,
    AddBuggyComponent,
    UpdateBuggyComponent,
    MarquesComponent,
    AddMarqueComponent,
    UpdateMarqueComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParMarqueComponent,
    RechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
