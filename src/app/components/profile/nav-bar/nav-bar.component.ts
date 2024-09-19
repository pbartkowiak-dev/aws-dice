import { Component } from '@angular/core';
import { ButtonComponent } from '../../dice-roller/button/button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavButton } from './nav-button/nav-button.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ButtonComponent, RouterLink, RouterLinkActive, NavButton],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
