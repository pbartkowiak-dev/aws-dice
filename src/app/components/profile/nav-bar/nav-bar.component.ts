import { Component } from '@angular/core';
import { ButtonComponent } from '../../dice-roller/button/button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavButton } from './nav-button/nav-button.component';
import { AuthService } from '../../../services/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    RouterLinkActive,
    NavButton,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );

  constructor(private authService: AuthService) {
    this.checkUser();
  }

  async checkUser() {
    const user = await this.authService.getAuthenticatedUser();
    console.log('nav user', user);
    this.isAuthenticated.next(!!user);
  }

  logOut(): void {
    this.authService.logOut();
    this.isAuthenticated.next(false);
  }
}
