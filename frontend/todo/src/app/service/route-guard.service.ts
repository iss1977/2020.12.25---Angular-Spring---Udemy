import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HartcodedAuthenticationService } from './hartcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private router:Router,
    private hartcodedAuthenticationService: HartcodedAuthenticationService) {

  }  //end constructor
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hartcodedAuthenticationService.isUserLoggedIn())
      return true
    else
      this.router.navigate(['login'])
      return false
  }
}
