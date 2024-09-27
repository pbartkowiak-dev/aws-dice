import { Injectable } from '@angular/core';
import { RegisterData } from '../model/auth';

import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'foo',
  ClientId: 'bar',
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  async register(data: RegisterData) {}
}
