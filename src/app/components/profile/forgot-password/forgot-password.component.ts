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
import { ForgotPasswordData, SignInData } from '../../../model/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NavBarComponent, ButtonComponent, NgIf],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login/login.component.css'],
})
export class ForgotPassword {
  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.forgotPasswordForm = this.fb.group({
      username: ['', Validators.required],
      code: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const data = this.forgotPasswordForm.value;
      const { username, code, password } = data;
      console.log('Form data:', { username, code, password });

      this.authService.forgotPassword({
        username,
        code,
        password,
      } as ForgotPasswordData);

      this.router.navigate(['/']); // Redirect after logging in
    }
  }
}
