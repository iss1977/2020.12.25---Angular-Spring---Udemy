import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: string ="nod defined"
  message = 'Some welcome message'
  welcomeMessageFromService: string = ''

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(): string{
    console.log(this.service.executeHelloWorldBeanService())
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
    console.log("Last line of welcome message")
    return ""
  }

  getWelcomeMessageWithParameter(): string{
    console.log(this.service.executeHelloWorldBeanServiceWithPathVariable('cool-text'))
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
    console.log("Last line of welcome message")
    return ""
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(errorResponse){
    this.welcomeMessageFromService = errorResponse.error.message
    console.log(errorResponse.error.error)
  }
}
