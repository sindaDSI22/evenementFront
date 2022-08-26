import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { EvenementComponent } from './evenement/evenement.component';
import { LoginComponent } from './login/login.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const routes: Routes = [
  {path: "event", component : EvenementComponent},
  {path:"add", component : AddEvenementComponent},
  {path:"updateEvent/:id", component :UpdateEventComponent},
  {path:"login",component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
