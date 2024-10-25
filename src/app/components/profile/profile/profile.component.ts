import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, NgIf, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: '../profile.css',
})
export class Profile {
  username: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.checkUser();
  }

  async checkUser() {
    const user = await this.authService.getAuthenticatedUser();
    console.log('user', user);
    if (!user) {
      this.router.navigate(['login']);
      return;
    }
    this.username = user.getUsername();
  }
}
