import { Component } from '@angular/core';
import { ModifierService } from '../../services/modifier.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-input',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './modifier-input.component.html',
  styleUrl: './modifier-input.component.css',
})
export class ModifierInputComponent {
  modifier: string = '0';
  constructor(private modifierService: ModifierService) {
    modifierService.getModifier.subscribe((newValue) => {
      this.modifier = `${newValue > 0 ? '+' + newValue : newValue}`;
    });
  }

  handleIncrease() {
    this.modifierService.increase();
  }

  handleDecrease() {
    this.modifierService.decrease();
  }
}
