import { Component } from '@angular/core';
import { ModifierService } from '../../services/modifier.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modifier-input',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modifier-input.component.html',
  styleUrl: './modifier-input.component.css',
})
export class ModifierInputComponent {
  modifier: number = 0;
  constructor(private modifierService: ModifierService) {
    modifierService.getModifier.subscribe((newValue) => {
      this.modifier = newValue;
    });
  }

  handleIncrease() {
    this.modifierService.increase();
  }

  handleDecrease() {
    this.modifierService.decrease();
  }
}
