import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated = false;
  private _user: firebase.User | undefined | null;
  constructor(public auth: AngularFireAuth) {}

  public async login(): Promise<void> {
    const result = await this.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    this._authenticated = true;
    this._user = result.user;
  }

  public async logout() {
    await this.auth.signOut();
  }

  public get isAuthenticated() {
    return this._authenticated;
  }

  public get user(): firebase.User | null {
    if (this._user) {
      return this._user;
    }
    return null;
  }
}
