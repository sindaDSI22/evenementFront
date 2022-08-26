import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  currentEvent = new Evenement();
  events! : Evenement[];
  types:string[];
  constructor(private evenementservice : EvenementService,
    private activatedRoute: ActivatedRoute,) { 
      this.types=["sportif","culturel"];
    }

  ngOnInit(): void {
    this.evenementservice.listerEvent().subscribe( data => {
      this.events = data;
    })
    this.evenementservice.EvenementById(this.activatedRoute.snapshot.params['id']).
    subscribe(evt => { 
      this.currentEvent = evt; 

    });
 
  }
  update(){     
    console.log(this.activatedRoute.snapshot.params['id']);
    this.evenementservice.updateEvent(this.currentEvent,this.activatedRoute.snapshot.params['id']).subscribe(app => {
       console.log("modification avec succées");
    }, (error) => { alert("Problème lors de la modification !"); }
    );

  }
}
