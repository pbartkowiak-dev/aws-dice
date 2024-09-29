import { Injectable } from '@angular/core';
import { ConfirmUserData, RegisterData, SignInData } from '../model/auth';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  handleError(error: any) {
    console.error(error?.message || JSON.stringify(error));
    this.authDidFailed.next(true);
    this.isLoading.next(false);
  }

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
          this.handleError(err);
          return;
        }

        if (result) {
          this.registeredUser = result.user;
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
        this.handleError(err);
        return;
      }
      console.log('call result: ' + result);
      this.authDidFailed.next(false);
      this.isLoading.next(false);
    });
  }

  async signIn(data: SignInData) {
    const { username, password } = data;
    this.isLoading.next(true);

    const authenticationData = {
      Username: username,
      Password: password,
    };
    const authenticationDetails =
      new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result: CognitoUserSession) => {
        this.isLoading.next(false);
        console.log('result', result);
      },

      onFailure: (err) => {
        this.handleError(err);
        return;
      },
    });
  }

  getAuthenticatedUser() {
    return userPool.getCurrentUser();
  }

  isAuthenticated(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const user = this.getAuthenticatedUser();
      if (!user) {
        observer.next(false);
        observer.complete();
      } else {
        user.getSession((err: any, session: CognitoUserSession) => {
          if (err) {
            observer.next(false);
          } else {
            observer.next(session.isValid());
          }
          observer.complete();
        });
      }
    });
  }

  async logOut() {
    const user = await this.getAuthenticatedUser();
    if (user) {
      user.signOut();
      await this.router.navigate(['/login']);
    }
  }
}
