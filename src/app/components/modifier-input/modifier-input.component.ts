import { Component } from '@angular/core';
import { ModifierService } from '../../services/modifier.service';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-input',
  standalone: true,
  imports: [NgIf, FormsModule, NgClass],
  templateUrl: './modifier-input.component.html',
  styleUrl: './modifier-input.component.css',
})
export class ModifierInputComponent {
  modifierLocal: string = '0';
  isInvalid: boolean = false;
  constructor(private modifierService: ModifierService) {
    modifierService.getModifier.subscribe((newValue) => {
      this.modifierLocal = `${newValue > 0 ? '+' + newValue : newValue}`;
      this.isInvalid = false;
    });
  }

  onInputChange(value: string) {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      this.isInvalid = true;
      return;
    }
    this.modifierService.setModifier(parsedValue);
  }

  handleIncrease() {
    this.modifierService.increase();
  }

  handleDecrease() {
    this.modifierService.decrease();
  }
}
