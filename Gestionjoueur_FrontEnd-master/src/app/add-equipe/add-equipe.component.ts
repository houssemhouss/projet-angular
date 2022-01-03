import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipe } from '../model/equipe';
import { equipeService } from '../services/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddequipeComponent implements OnInit {

  newequipe = new equipe();
  mess!: string;
   constructor(private equipeService: equipeService,private router :Router) {} 

   ngOnInit(): void {
  }

  addMarque(){
     this.equipeService.ajouterequipe(this.newequipe) .subscribe(mrq => {
        console.log(mrq); 
      }); 
      this.router.navigate(['equipes']); 
      this.ngOnInit();

    }


  
}
