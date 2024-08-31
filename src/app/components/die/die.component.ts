import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RollService} from "../../services/roll.service";

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

  constructor(
    private rollService: RollService
  ) {
    this.diceImgSrc = ''
  }

  ngOnInit() {
    this.diceImgSrc = `/assets/img/${this.label}.png`;

  }

  onClick() {
    this.rollService.handleDieClick(this.faces)
  }

}
