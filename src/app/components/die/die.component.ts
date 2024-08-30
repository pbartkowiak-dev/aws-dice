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
export class DieComponent implements OnInit {
  diceImgSrc: string;

  @Input() label: string = "d6"
  @Input() type: string = "6"
  @Input() faces: number = 6

  constructor() {
    console.log('dice, label', this.label)
    this.diceImgSrc = ''
  }

  ngOnInit() {
    this.diceImgSrc = `/assets/img/${this.label}.png`;

  }

  onClick() {
    console.log('click ->', this.label)
  }

}
