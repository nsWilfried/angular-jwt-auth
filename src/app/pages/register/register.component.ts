import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerGroup!: FormGroup
  registerValue!: any;
  hide: boolean = true
  loading: boolean = false
  constructor(
    private fb: FormBuilder, 

    private authService: AuthService, 
    private router: Router, 
    private snackbar:MatSnackBar
  ) { 
    this.registerGroup = this.fb.group({
      username: new FormControl('', [Validators.required]), 
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.loading = true
    this.registerValue = this.registerGroup.value

    const username = this.registerValue['username']
    const password = this.registerValue['password']
    const email = this.registerValue['email']

    // register user
    this.authService.register(username,email,password)
      .subscribe(() => {
        this.snackbar.open("Utilisateur crée", 'Success', {
            horizontalPosition: 'center',
            verticalPosition:'bottom',
          });
        this.router.navigate(['/user/login'])
      },
        (error) => {
          this.snackbar.open(error.message, 'Erreur', {
            horizontalPosition: 'center',
            verticalPosition:'bottom',
          });
        }
      )
    
  }
}
