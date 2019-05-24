import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    mail: "",
    password: ""
  };

  errorMessage: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.router.navigateByUrl("/profile");
    }
  }

  login() {
    this.errorMessage = "";
    this.authService.login(this.user)
      .subscribe(res => {
        localStorage.setItem("token", res.token);
        this.router.navigateByUrl("/profile");
      }, err => {
        this.errorMessage = err.error.message;
      })
  }
}
