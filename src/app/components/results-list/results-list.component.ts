import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RollService} from "../../services/roll.service";
import {RollResult} from "../../model/roll";

@Component({
  selector: 'app-results-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './results-list.component.html',
  styleUrl: './results-list.component.css'
})
export class ResultsListComponent implements OnInit {
  results: RollResult[]= []

  constructor(private rollService: RollService) {
  }

  ngOnInit() {
    this.results = this.rollService.getResults()

  }
}
