import { Component, OnInit } from '@angular/core';
import { HartcodedAuthenticationService } from '../service/hartcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hartcodedAuthenticationService: HartcodedAuthenticationService) { }

  ngOnInit(): void {
    this.hartcodedAuthenticationService.logout()
  }

}
