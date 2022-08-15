import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private router:Router
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
    this.authService.register(this.registerValue['username'],
      this.registerValue['email'], this.registerValue['password'])
      .subscribe(() => {
        console.log('tout marche bien on dirait')
        this.router.navigate(['/user/login'])
    })
  }
}
