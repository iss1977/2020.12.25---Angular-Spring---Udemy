import { Component, OnInit } from '@angular/core';
import { HartcodedAuthenticationService } from '../service/hartcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn: boolean = false
  constructor(public  hartcodedAuthenticationService: HartcodedAuthenticationService) { }

  ngOnInit(): void {
    //this.isUserLoggedIn= this.hartcodedAuthenticationService.isUserLoggedIn()
  }

}
