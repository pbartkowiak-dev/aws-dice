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
import { ConfirmUserData, RegisterData } from '../../../model/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NavBarComponent, ButtonComponent, NgIf],
  templateUrl: './register.component.html',
  styleUrl: '../profile.css',
})
export class Register {
  registerForm: FormGroup;
  confirmForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.confirmForm = this.fb.group({
      confirmUsername: ['', Validators.required],
      code: ['', [Validators.required]],
    });

    authService.getIsLoading.subscribe((value: boolean) => {
      this.isLoading = value;
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      const { username, email, password, confirmPassword } = data;
      console.log('Form data:', { username, email, password });

      await this.authService.register({
        username,
        email,
        password,
      } as RegisterData);

      // this.router.navigate(['/']); // Redirect after logging in
    }
  }

  async confirmUser() {
    if (this.confirmForm.valid) {
      const data = this.confirmForm.value;
      const { confirmUsername, code } = data;

      await this.authService.confirmUser({
        username: confirmUsername,
        code,
      } as ConfirmUserData);
    }
  }
}
