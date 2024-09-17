import { Component } from '@angular/core';
import { ButtonComponent } from '../dice-roller/button/button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class History {}
