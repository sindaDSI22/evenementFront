import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  newEvent=new Evenement();
  types:string[];
  constructor(private evenementservice : EvenementService) {
    this.types=["sportif","culturel"];
   }

  ngOnInit(): void {
  }
  ajout(){
    this.evenementservice.ajouterEvenement(this.newEvent).subscribe(app => {
       console.log("ajout avec succées");
      }, (error) => { alert("Problème lors de l'ajout !"); }
      );
    
  }
}
