import { Injectable } from '@angular/core';
import { RollResult} from '../model/roll'
@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor() {}

  getResults(): RollResult[] {
    return [{
      faces: 6,
      result: 4
    }, {
      faces: 20,
      result: 18
    }];
  }

}
