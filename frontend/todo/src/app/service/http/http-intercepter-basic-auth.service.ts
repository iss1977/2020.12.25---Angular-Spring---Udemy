import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }


  /**
   *
   * We have to configure the providers in app.module.ts
   *
   */
  intercept(request: HttpRequest<any>, next: HttpHandler) { // "request" is the request going out
    // let username = "user"
    // let password = "password"

    // there is a javascript function called window.btoa to encode a string
    // let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password) // the space after "BASIC " is important
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {

      request = request.clone({  //28Min sais, it can NOT be modified, so it will be cloned with this specific proprieties
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(request)
  }

}
