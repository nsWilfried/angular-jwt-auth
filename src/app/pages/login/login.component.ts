import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup!: FormGroup
  loginValue: any
  loading: boolean=false 
  hide:boolean = true
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router, 
    private snackbar: MatSnackBar
  ) { 
    this.loginGroup = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.loading = true
    this.loginValue = this.loginGroup.value
    this.authService.login(this.loginValue['email'], this.loginValue['password'])
      .subscribe(
        (response) => {
          const user = {
            email: response.email, 
            username: response.username, 
            token: response.token,
            id: response._id
          }
          localStorage.setItem('user', JSON.stringify(user))
          this.router.navigate(['/home'])
        }
        ,
        (error) => {
           this.snackbar.open(error.message, 'Erreur', {
            horizontalPosition: 'center',
            verticalPosition:'bottom',
          });
        })
    
  }
}
