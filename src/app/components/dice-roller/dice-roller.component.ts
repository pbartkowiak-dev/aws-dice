import { Component } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';

@Component({
  selector: 'app-dice-roller',
  standalone: true,
  imports: [BodyComponent, DiceTrayComponent],
  templateUrl: './dice-roller.component.html',
  styleUrl: './dice-roller.component.css',
})
export class DiceRoller {}
