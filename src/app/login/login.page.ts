import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public user = {
    email: '',
    pass: ''
  }

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.login();
    this.router.navigateByUrl('/home');
  }

}
