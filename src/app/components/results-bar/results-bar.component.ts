import {Component, OnInit} from '@angular/core';
import {RollService} from "../../services/roll.service";
import {RollResult} from "../../model/roll";

@Component({
  selector: 'app-results-bar',
  standalone: true,
  imports: [],
  templateUrl: './results-bar.component.html',
  styleUrl: './results-bar.component.css'
})
export class ResultsBarComponent implements OnInit {
  total: number = 0;
  lowest: number = 0;
  highest: number = 0;
  summary: string = '';
  results: RollResult[] = []

  constructor(
    private rollService: RollService
  ) { }

  ngOnInit() {
    this.results = this.rollService.getResults();

    console.log('results bar results', this.results)

    if (this.results.length) {
      const resultsValues = this.results.map((result) => {
        return result.result
      });

      this.total = resultsValues.reduce((previousValue, currentValue)=> {
        return previousValue + currentValue;
      }, 0);

      this.highest = Math.max(...resultsValues);
      this.lowest = Math.max(...resultsValues);
    }


  }
}
