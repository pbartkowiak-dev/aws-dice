import { Injectable } from '@angular/core';
import { RollResult } from '../model/roll';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RollService {
  private results: BehaviorSubject<RollResult[]> = new BehaviorSubject<
    RollResult[]
  >([]);
  getResults: Observable<RollResult[]> = this.results.asObservable();

  constructor() {}

  rollOffline(faces: number): number {
    return Math.floor(Math.random() * faces) + 1;
  }

  handleDieClick(faces: number): void {
    const result = this.rollOffline(faces);

    const updatedResults = [
      ...this.results.value,
      {
        faces,
        result,
        active: true,
        id: +Date.now(),
      },
    ];
    this.results.next(updatedResults);
  }

  toggleActive(id: number) {
    const updatedResults = this.results.value.map((result) => {
      if (result.id === id) {
        result.active = !result.active;
      }
      return result;
    });
    this.results.next(updatedResults);
  }

  handleNewRollClick() {
    this.results.next([]);
  }
}
