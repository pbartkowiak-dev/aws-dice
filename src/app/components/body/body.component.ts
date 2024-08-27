import { Component } from '@angular/core';
import {ResultsBarComponent} from "../results-bar/results-bar.component";
import {ResultsListComponent} from "../results-list/results-list.component";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ResultsBarComponent,
    ResultsListComponent,
    ButtonComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {

}
