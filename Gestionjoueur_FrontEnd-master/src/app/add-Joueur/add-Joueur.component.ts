import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Joueur } from '../model/Joueur';
import { JoueurService } from '../services/Joueur.service';
import { MarqueService } from '../services/equipe.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
//import { Marque } from 'c:/Users/houssem/Desktop/DSI 33/Atelier S.O.A/Angular_2021/MesBuggys/src/app/model/marque';
@Component({
  selector: 'app-add-Joueur',
  templateUrl: './add-Joueur.component.html',
  styleUrls: ['./add-Joueur.component.css']
})
export class AddJoueurComponent implements OnInit {
  JoueurForm:FormGroup;
  mess!: string;
  marqueList:any = [];
   constructor(private JoueurService: JoueurService,private router :Router,private marqueService: equipeService,private formBuilder:FormBuilder) {
    this.JoueurForm = this.formBuilder.group({

      name : new FormControl(''),
      price : new FormControl(''),
      date : new FormControl(''),
     equipe : new FormControl('')
    })

   } 

   ngOnInit(): void {
     this.onSelectmarq();
     
  }

  addBuggy(){
    let newJoueur :Joueur  = new Joueur(this.JoueurForm.value.name,this.JoueurForm.value.price,this.JoueurForm.value.date,this.buggyForm.value.marque);
    
     this.JoueurService.ajouterJoueur(newJoueur) .subscribe(bug => {
        console.log(bug); 
      }); 
      this.ngOnInit();
      this.router.navigate(['s']); 
   
    }

    onSelectmarq(){
      this.equipeervice.listeequipe().subscribe(response =>{
        console.log(response)
        this.marqueList = response;
        
      }); 
    }


  
}
