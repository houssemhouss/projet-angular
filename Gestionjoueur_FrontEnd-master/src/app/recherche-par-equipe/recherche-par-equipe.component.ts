import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Buggy } from '../model/joueur';
import { Marque } from '../model/equipe';
import { BuggyService } from '../services/Joueur.service';
import { MarqueService } from '../services/equipe.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
buggys: Buggy[];
//marques: Observable<Marque[]>;
marqueList:any = [];
idMq:number;
buggysRecherche: Buggy[];

  constructor(private buggyService : BuggyService, private marqueService : MarqueService) { }

  ngOnInit(): void {
      this.onSelectmarq();
     // this.buggys=[];
      //this.buggys=this.buggyService.listeBuggy();
      this.buggyService.listeBuggy().subscribe(bugs => {
         console.log(bugs); 
         this.buggys = bugs; 
         
        });
  }

  onSelectmarq(){
    this.marqueService.listeMarque().subscribe(response =>{
      console.log(response)
      this.marqueList = response;
      
    }); 
    
  }
  onChange(){
    console.log(this.idMq);
    this.buggys= this.rechercherParMarque(this.idMq);

  }

  rechercherParMarque(idMq: number): Buggy[]{ 
    this.buggysRecherche = []; 
    this.buggys.forEach((cur, index) => { 
      if(idMq == cur.marque.idMq) { 
        console.log("cur "+cur); 
        this.buggysRecherche.push(cur); 
      } }); 
      return this.buggysRecherche; 
      
    }

}
