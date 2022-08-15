import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '', 
    component: RegisterComponent, 
    canActivate: [AuthGuard]

  }, 
  {
    path: 'user/login', 
    component: LoginComponent, 
    canActivate: [AuthGuard]
  }, 
  {
    path: 'home', 
    component: HomeComponent, 
    
   }, 
  {
    path: '**', 
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
