import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipe } from '../model/equipe';
import { AuthService } from '../services/auth.service';
import { equipeService } from '../services/equipe.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class equipesComponent implements OnInit  {

  public equipes: equipe[];
  
  constructor(private marqueService: equipeService,public authService: AuthService) { 
    //this.joueurs = joueurService.listejoueurs();
    
  }

  ngOnInit(): void {
    this.equipeService.listeequipe().subscribe(joueurs => { console.log(joueur); this.equipes = joueur; });
  }

 supprimerMarque(b: equipe) {   
   let conf = confirm("Etes-vous sûr ?");
    if (conf) this.marqueService.supprimerequipe(b.idMq).subscribe(() => {
       console.log("buggy supprimé"); 
       this.SuprimerequipeDuTableau(b);
       //return true;
      }
   
      ); 

    }


    SuprimerMarqueDuTableau(bug : Marque) { 
      this.marques.forEach((cur, index) => { 
        if(bug.idMq=== cur.idMq) { 
          this.marques.splice(index, 1); } });
}
}
