import { Injectable } from '@angular/core';
import { RollResult} from '../model/roll'
import {BehaviorSubject, Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RollService {
  private results: BehaviorSubject<RollResult[]> = new BehaviorSubject<RollResult[]>([]);
  getResults: Observable<RollResult[]> = this.results.asObservable();

  constructor() {
  }


  rollOffline(faces: number): number {
    return Math.floor(Math.random() * faces) + 1;
  }

  handleDieClick(faces: number): void {
    const result = this.rollOffline(faces);
    console.log('roll faces->', faces)
    console.log('roll result->', result)

    const updatedResults = [...this.results.value, { faces, result }];
    this.results.next(updatedResults);

  }

  handleNewRollClick() {
    this.results.next([])
  }
}
