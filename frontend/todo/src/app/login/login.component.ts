import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HartcodedAuthenticationService } from '../service/hartcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "myusername"
  password: string = ''
  errorMessage: string = 'Invalid credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    public hartcodedAuthenticationService: HartcodedAuthenticationService,
    public basicAuthenticationService: BasicAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    console.log(this.username + "," + this.password);
    // if (this.username === 'user' && this.password === 'pass') {
    if (this.hartcodedAuthenticationService.authenticate(this.username, this.password)) {
      //redirect
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  handleBasicAuthLogin(): void {
    console.warn("Starting login.component.ts : handleBasicAuthLogin()")
    console.log("Auth Login with: "+this.username + "," + this.password);
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log("login.component.ts: executing the subscribe method . Retrieved data from Server");
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.error(error)
          this.invalidLogin = true
        }
      )
  }

}  // end of class LoginComponent
