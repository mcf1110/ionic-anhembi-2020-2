import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }

  public isLoggedIn() {
    return this.loggedIn;
  }

  public login(email: string, pass: string) {
    if (email === 'matheus@teste.com' && pass === '1234') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  public logout() {
    this.loggedIn = false;
  }
}
