import { Injectable } from '@angular/core';
import { RollResult } from '../model/roll';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RollService {
  private useLambda = environment.useLambda;
  private apiUrl = environment.apiUrl;

  private results: BehaviorSubject<RollResult[]> = new BehaviorSubject<
    RollResult[]
  >([]);
  getResults: Observable<RollResult[]> = this.results.asObservable();

  constructor() {}

  rollOffline(faces: number): number {
    return Math.floor(Math.random() * faces) + 1;
  }

  async rollServerless(faces: number): Promise<number> {
    const url = new URL(this.apiUrl);
    url.searchParams.append('faces', `${faces}`);

    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    try {
      const body = JSON.parse(data.body);
      return body.result;
    } catch (error) {
      console.error(error);
      return this.rollOffline(faces);
    }
  }

  async handleDieClick(faces: number): Promise<void> {
    let result;

    if (this.useLambda && this.apiUrl) {
      result = await this.rollServerless(faces);
    } else {
      result = this.rollOffline(faces);
    }

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
