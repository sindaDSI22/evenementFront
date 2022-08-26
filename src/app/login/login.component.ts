import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur: number = 0;
  public idrole!: number;
  constructor(private evenementservice : EvenementService,
    private router: Router) { }

  ngOnInit(): void {
    this.evenementservice.getUser(this.user.login).subscribe(event => {
      console.log(event);
      this.idrole = event.role_id;
      localStorage.setItem('idrole', String(this.idrole));
    });
  }

  Loggedin(){
    console.log(this.user);
    this.evenementservice.login(this.user)
    .subscribe((data) => {
      console.log(data); 
      this.router.navigate(['/event']);
  },
    (err) => {
      this.erreur = 1;
    });
  }

}
