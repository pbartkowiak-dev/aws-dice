import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-die',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './die.component.html',
  styleUrl: './die.component.css'
})
export class DieComponent {
  @Input() label: string = "d6"
  @Input() type: string = "6"
  @Input() faces: number = 6

  onClick() {
    console.log('click ->', this.label)
  }

}
