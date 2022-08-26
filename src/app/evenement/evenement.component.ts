import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  events! : Evenement[];
  admin! : Boolean;
  role! : string;
  constructor(public evenementservice : EvenementService) {
    //this.admin = JSON.parse(localStorage.getItem('isadmin'));
   }

  ngOnInit(): void {
    this.evenementservice.listerEvent().subscribe(event => {
      console.log(event);
      this.events = event;
    });

  }

  supprimerEvt(evv: Evenement) {


    let conf = confirm("Etes-vous sûr ?");

    if (conf)
      this.evenementservice.supprimerEvenement(evv.id).subscribe(() => {
        console.log("evenement supprimé");
      });

  }

}
