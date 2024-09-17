import { Component } from '@angular/core';
import { ButtonComponent } from '../../dice-roller/button/button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, RouterLink, RouterLinkActive, NavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class Login {}
