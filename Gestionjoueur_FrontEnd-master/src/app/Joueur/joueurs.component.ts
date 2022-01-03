import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buggy } from '../model/joueur';
import { AuthService } from '../services/auth.service';
import { JoueurService } from '../services/Joueur.service';
@Component({
  selector: 'app-Joueurs',
  templateUrl: './Joueurs.component.html',
  styleUrls: ['./Joueurs.component.css']
})
export class BuggysComponent implements OnInit {

  buggys : Buggy[];
  
  constructor(private JoueurService: JoueurService,public authService: AuthService) { 
    //this.Joueurs = JoueurService.listeJoueurs();
    
  }

  ngOnInit(): void {
    thisJoueurService.listeJoueur().subscribe(bugs => { console.log(bugs); this.Joueurs = bugs; });
  }

 supprimerBuggy(b: Buggy) { 
   let conf = confirm("Etes-vous sûr ?");
    if (conf) this.JoueurService.supprimerBuggy(b.idBuggy).subscribe(() => {
       console.log(Joueur supprimé"); 
       this.SuprimerJoueurDuTableau(b);
      }); 

    }
    SuprimerBJoueuryDuTableau(bug : Joueur) { 
      this.Joueurs.forEach((cur, index) => { 
        if(bug.idJoueur=== cur.idJoueur) { 
          this.Joueurs.splice(index, 1); } });
}
}
