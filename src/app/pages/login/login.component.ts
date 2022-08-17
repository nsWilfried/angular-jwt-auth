import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
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
    private snackbar: MatSnackBar ,
    private alert: AlertService ,
    
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

    const email = this.loginValue['email']
    const password = this.loginValue['password']
    this.authService.login(email, password)
      .subscribe(
        (response) => {
          const user = {
            email: response.email, 
            username: response.username, 
            token: response.token,
            id: response._id
          }
          localStorage.setItem('user', JSON.stringify(user))
          this.alert.showSuccessAlert("Succès ", "Utilisateur connecté")
          this.router.navigate(['/home'])
        }
        ,
        (error) => {
          this.loading = false
          this.loginGroup.reset()
           this.alert.showErrorAlert("Erreur", "Erreur lors de la connexion")
        })
    
  }
}
