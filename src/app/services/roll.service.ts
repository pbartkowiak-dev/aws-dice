import { Injectable } from '@angular/core';
import { RollResult} from '../model/roll'
@Injectable({
  providedIn: 'root'
})
export class RollService {
  results: RollResult[] = [];

  constructor() {}

  rollOffline(faces: number): number {
    return Math.floor(Math.random() * faces) + 1;
  }

  handleDieClick(faces: number): void {
    const result = this.rollOffline(faces);
    console.log('roll faces->', faces)
    console.log('roll result->', result)

    this.results.push({
      faces,
      result
    })

  }

  getResults(): RollResult[] {
    return this.results;
  }

  handleNewRollClick() {
    this.results.length = 0;
  }
}
