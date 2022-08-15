import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model ';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user!:any
  constructor(
    private authService: AuthService
  )
   { 
   this.user = localStorage.getItem('user')
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut()
  }
}
