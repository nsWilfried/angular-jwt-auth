import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthService } from './services/auth.service';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon'; 
  import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent, 
    LoadingComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatInputModule, 
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule, 
    MatButtonModule, 
    HttpClientModule, 
    MatIconModule, 
    BrowserAnimationsModule, 
    MatSnackBarModule, 
    SweetAlert2Module
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
