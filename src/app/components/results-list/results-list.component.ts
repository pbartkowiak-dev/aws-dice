import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RollService} from "../../services/roll.service";
import {RollResult} from "../../model/roll";

@Component({
  selector: 'app-results-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './results-list.component.html',
  styleUrl: './results-list.component.css'
})
export class ResultsListComponent implements OnInit {
  results: RollResult[] = []

  constructor(private rollService: RollService) {
    this.rollService.getResults.subscribe((results) => {
      this.results = results
    })
  }

  handleToggleActiveClick(id: number): void {
    this.rollService.toggleActive(id);
  }

  ngOnInit() {

  }
}
