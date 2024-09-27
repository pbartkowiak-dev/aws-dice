import { Injectable } from '@angular/core';
import { ConfirmUserData, RegisterData } from '../model/auth';

import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'foo',
  ClientId: 'bar',
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authDidFailed: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );
  getIsLoading: Observable<boolean> = this.isLoading.asObservable();

  private registeredUser: CognitoUser | undefined;

  constructor() {}

  async register(data: RegisterData) {
    this.isLoading.next(true);
    const attributeList: CognitoUserAttribute[] = [];
    const emailAttribute = { Name: 'email', Value: data.email };
    attributeList.push(new CognitoUserAttribute(emailAttribute));

    userPool.signUp(
      data.username,
      data.password,
      attributeList,
      // @ts-ignore wrongly typed in SDK's index.d.ts
      null,
      (err, result) => {
        if (err) {
          this.isLoading.next(false);
          this.authDidFailed.next(true);
          console.error(err.message || JSON.stringify(err));
          return;
        }

        if (result) {
          this.registeredUser = result.user;
          console.log('user name is ' + this.registeredUser.getUsername());
        }
        this.authDidFailed.next(false);
        this.isLoading.next(false);
      },
    );
  }

  async confirmUser(data: ConfirmUserData) {
    this.isLoading.next(true);

    const userData = { Username: data.username, Pool: userPool };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.confirmRegistration(data.code, true, (err, result) => {
      if (err) {
        console.error(err.message || JSON.stringify(err));
        this.authDidFailed.next(true);
        this.isLoading.next(false);
        return;
      }
      console.log('call result: ' + result);
      this.authDidFailed.next(false);
      this.isLoading.next(false);
    });
  }
}
