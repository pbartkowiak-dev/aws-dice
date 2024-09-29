import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ButtonComponent } from '../../dice-roller/button/button.component';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { SignInData } from '../../../model/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NavBarComponent, ButtonComponent, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      const { username, password } = data;
      console.log('Form data:', { username, password });

      this.authService.signIn({ username, password } as SignInData);

      this.router.navigate(['/']); // Redirect after logging in
    }
  }
}
