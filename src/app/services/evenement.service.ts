import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evenement } from '../model/evenement.model';
import { User } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  apiURL: string = 'http://127.0.0.1:5000/';
  public roles!: number;
  users! : User;
  constructor(private http : HttpClient) { 
  }

  listerEvent():Observable<Evenement[]>{
    console.log("hello !!!!");
    return this.http.get<Evenement[]>(this.apiURL+ "get_event",httpOptions);
    
  }
  getUser(login: string):Observable<User>{
    const url = `${this.apiURL}get_user/${login}`;
    return this.http.get<User>(this.apiURL+ url,httpOptions);
    
  }


  EvenementById(id: number): Observable<Evenement> {
    const url = `${this.apiURL}get_event_id/${id}`;
    return this.http.get<Evenement>(url, httpOptions);

  }

  supprimerEvenement(id: number) {
    const url = `${this.apiURL}suppEvent/${id}`;
    return this.http.delete(url, httpOptions);


  }

  ajouterEvenement(event: Evenement): Observable<Evenement> {
    console.log("hello !!!!");
    return this.http.post<Evenement>(this.apiURL+"addEvent", event, httpOptions);
  }

  updateEvent(event: Evenement,id :number): Observable<Evenement> {
    const url = `${this.apiURL}updateEvent/${id}`;
    console.log(event);
    return this.http.post<Evenement>(url,event,httpOptions);
  }

  //authentification

  login(user: User) {
    
    return this.http.post<User>(this.apiURL + '/login', user, { observe: 'response' });
  }

  /*isAdmin(user :User): Boolean {
    if (user.role_id == 1)
      return true;
    return false;
  }*/

  isAdmin(): Boolean {
    if (this.roles == 1)
      return true;
    return false;
  }

}
