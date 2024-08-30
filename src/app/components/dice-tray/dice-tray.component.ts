import {Component} from '@angular/core';
import {DieComponent} from "../die/die.component";
import {ModifierInputComponent} from "../modifier-input/modifier-input.component";

@Component({
  selector: 'app-dice-tray',
  standalone: true,
  imports: [
    DieComponent,
    ModifierInputComponent
  ],
  templateUrl: './dice-tray.component.html',
  styleUrl: './dice-tray.component.css'
})
export class DiceTrayComponent {

}
