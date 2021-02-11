import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {map} from 'rxjs/operators'

export const TOKEN = 'mytoken'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // this method is not needed any more
  // authenticate(username, password) {
  //   console.log('before ' + this.isUserLoggedIn())
  //   if (username === 'user' && password === 'pass') {
  //     window.sessionStorage.setItem('authenticatedUser', username)
  //     console.log('after ' + this.isUserLoggedIn())
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  executeAuthenticationService(username: string, password: string): any {

    // there is a javascript function called window.btoa to encode a string
    // created encoded string with user and password:
    let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password) // the space after "BASIC " is important



    //HttpHeaders is an Angular object (see import on top) and will be used to be send with the next GET request.
    let myHeader = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })


    return (this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers: myHeader })) // we add myHeader as headers that will be an HttpHeaders object containing the login information. you can omit "headers" and just put in "{myHeader}"
      .pipe( // 28min says: pipe what should be done if the request successes. We will use this in login.component.ts
        map(
          data => {
            window.sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, basicAuthHeaderString) // 28min uses "token" here
            return data
          }
        )
      )

  }


  getAuthenticatedUser(): string {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(): string {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}
