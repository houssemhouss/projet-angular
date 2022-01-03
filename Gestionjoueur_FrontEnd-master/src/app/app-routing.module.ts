import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuggysComponent } from './Joueur/joueurs.component';
import { AddBuggyComponent } from './add-Joueur/add-Joueur.component';
import { UpdateBuggyComponent } from './update-Joueur/update-joueur.component';
import { MarquesComponent } from './equipes/equipes.omponent';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { UpdateMarqueComponent } from './update-equipe/update-equipe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BuggyGuard } from './Joueur.guard';
import { MarqueGuard } from './equipe.guard';
import { RechercheParMarqueComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path: "buggys", component : BuggysComponent},
  {path: "add-buggy", component : AddBuggyComponent, canActivate:[BuggyGuard]},
  {path: "", redirectTo: "buggys", pathMatch: "full" },
  {path: "updateBuggy/:id", component: UpdateBuggyComponent, canActivate:[BuggyGuard]},
  {path: "marques", component : MarquesComponent},
  {path: "add-marque", component : AddMarqueComponent, canActivate:[MarqueGuard]},
  {path: "updateMarque/:id", component: UpdateMarqueComponent, canActivate:[MarqueGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: "rechercheParMarque", component : RechercheParMarqueComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
