import {Component} from '@angular/core';
import {DieComponent} from "../die/die.component";

@Component({
  selector: 'app-dice-tray',
  standalone: true,
  imports: [
    DieComponent
  ],
  templateUrl: './dice-tray.component.html',
  styleUrl: './dice-tray.component.css'
})
export class DiceTrayComponent {

}
