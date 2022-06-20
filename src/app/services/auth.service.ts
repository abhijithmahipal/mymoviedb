import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: firebase.User | undefined | null;
  constructor(public auth: AngularFireAuth) {}

  public async login(): Promise<void> {
    const result = await this.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    this._user = result.user;
    localStorage.setItem('userData', JSON.stringify(result.user));
  }

  public autoLogin() {
    const savedUser = localStorage.getItem('userData');
    if (savedUser) {
      this._user = JSON.parse(savedUser) as firebase.User;
      console.table(this.user);
    }
  }

  public async logout() {
    await this.auth.signOut();
    this._user = undefined;
    localStorage.removeItem('userData');
  }

  public get isAuthenticated(): boolean {
    if (this.user) {
      return true;
    }
    return false;
  }

  public get user(): firebase.User | null {
    if (this._user) {
      return this._user;
    }
    return null;
  }
}
