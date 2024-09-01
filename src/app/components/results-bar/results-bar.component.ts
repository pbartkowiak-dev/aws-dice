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

  constructor(private rollService: RollService) {
    this.rollService.getResults.subscribe(results => {

      const resultsActive = results.filter((result => result.active))

      if (resultsActive.length) {
        const resultsValues = resultsActive.map((result) => {
          return result.result
        });

        this.total = resultsValues.reduce((previousValue, currentValue)=> {
          return previousValue + currentValue;
        }, 0);

        this.summary = this.getSummary(resultsActive);

        if (resultsActive.length >= 2) {
          this.highest = Math.max(...resultsValues);
          this.lowest = Math.min(...resultsValues);
        } else {
          this.highest = 0;
          this.lowest = 0;
        }
      } else {
        this.total = 0;
        this.lowest = 0;
        this.highest = 0;
        this.summary = '';
      }
    })
  }

  getSummary(results: RollResult[]): string {
    const diceCount = results.reduce((previousValue, { faces }) => {
      const newValue = {...previousValue};
      const key = `d${faces}`;
      if (previousValue.hasOwnProperty(key)) {
        newValue[key] += 1
      } else {
        newValue[key] = 1;
      }
      return newValue;
    }, {} as { [key: string]: number });

    const entriesArray = Object.entries(diceCount).sort((a, b) => {
      const aNumber = parseInt(a[0].substring(1));
      const bNumber = parseInt(b[0].substring(1));
      return aNumber - bNumber;
    });

    return entriesArray.reduce((previousValue, currentValue) => {
       const dice = currentValue[0];
       const amount = currentValue[1];

       if (previousValue === '') {
         return previousValue + amount + dice;
       } else {
         return previousValue + ' + ' + amount + dice;
       }

     }, '')
  }

  ngOnInit() {
  }
}
