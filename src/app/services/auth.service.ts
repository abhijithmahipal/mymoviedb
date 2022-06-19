import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticated = false;

  constructor(public auth: AngularFireAuth) {}

  public googleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  public authLogin(provider: GoogleAuthProvider) {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
        this.authenticated = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public get isAuthenticated() {
    return this.authenticated;
  }
}
