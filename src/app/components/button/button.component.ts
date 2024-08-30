import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = ""
  @Input() iconSrc: string = ""
  @Input() type: string = ""
}
