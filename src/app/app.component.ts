import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiceTrayComponent } from './components/dice-tray/dice-tray.component';
import { BodyComponent } from './components/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiceTrayComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aws-dice';
}
