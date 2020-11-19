import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user = {
    email: '',
    pass: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.authService.login(this.user.email, this.user.pass)) {
      this.router.navigate(['/home']);
    }
  }

}
