import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model ";

 

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(
    private http: HttpClient, 
    private router:Router
  ) { }
  
  register(username: string, email: string, password: string):Observable<User> {
    return this.http.post<User>(`${environment.authEndpoint}/register`, {
      username: username, 
      email: email, 
      password:password
    })
  }

  login(email: string, password: string):Observable<User> {
   return  this.http.post<User>(`${environment.authEndpoint}/login`, {
      email: email, 
      password:password
    })
  }

  logOut() {
    localStorage.removeItem('user')
    return this.router.navigate(['/user/login'])
  }
}