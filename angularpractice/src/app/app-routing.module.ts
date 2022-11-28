import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { RegTheaterComponent } from './reg-theater/reg-theater.component'
import { InsertTheatreComponent } from './insert-theatre/insert-theatre.component';

const routes: Routes = [
  { path: '',component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'home',component:HomeComponent},
  { path: 'register-theater',component:RegTheaterComponent},
  { path: 'insert-theatre', component:InsertTheatreComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
