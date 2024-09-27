import { Injectable } from '@angular/core';
import { RegisterData } from '../model/auth';

import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { BehaviorSubject, Observable } from 'rxjs';

const poolData = {
  UserPoolId: 'foo',
  ClientId: 'bar',
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );
  getIsLoading: Observable<boolean> = this.isLoading.asObservable();

  constructor() {}

  async register(data: RegisterData) {
    this.isLoading.next(true);
  }
}
