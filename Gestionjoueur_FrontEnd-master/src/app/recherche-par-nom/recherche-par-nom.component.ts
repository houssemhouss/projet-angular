import { Component, OnInit } from '@angular/core';
import { Buggy } from '../model/joueur';
import { BuggyService } from '../services/Joueur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  buggys: Buggy[];
  
  constructor(private buggyService : BuggyService) { }

  ngOnInit(): void {
    
    this.buggyService.listeBuggy().subscribe(bugs => {
      console.log(bugs); 
      this.buggys = bugs; 
         });

//this.buggys=[];

  }
  public searchBuggy(key: string): void {
    const resultat: Buggy[] = [];
    for (const v of this.buggys) {
      if (v.nomBuggy.toLocaleLowerCase().indexOf(key.toLowerCase()) !== -1)
        resultat.push(v);
      }
    this.buggys = resultat;
   
  }

}
