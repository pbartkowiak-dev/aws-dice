import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModifierService {
  private modifier: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  getModifier: Observable<number> = this.modifier.asObservable();

  constructor() {}

  setModifier(newValue: number): void {
    this.modifier.next(newValue);
  }

  increase(): void {
    this.modifier.next(this.modifier.value + 1);
  }

  decrease(): void {
    this.modifier.next(this.modifier.value + -1);
  }

  handleNewRollClick(): void {
    this.modifier.next(0);
  }
}
