import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message: string){

  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(): any {
    return (this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean'))
    // console.log("Execute Hello World Bean Service.");
  }


  // This will be executed when you select "Get welcome message" from Home Menu Item
  // to send the basic authentication, we must include our user/pass in the header. We create a separate method to create this encoded string.
  //
  executeHelloWorldBeanServiceWithPathVariable(name: string): any {

    // // created encoded string with user and password:
    // let basicAuthHeaderString= this.createBasicAuthenticationHttpHeader();

    // //HttpHeaders is an Angular object (see import on top) and will be used to be send with the next GET request.
    // let myHeader = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // })


    return (this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world-bean/path-variable/${name}`,
      // {headers : myHeader})) // we add myHeader as headers that will be an HttpHeaders object containing the login information. you can omit "headers" and just put in "{myHeader}"
    ))
  }

  // is not used anymore
  // createBasicAuthenticationHttpHeader(): string {
  //     let username = "user"
  //     let password = "password"

  //     // there is a javascript function called window.btoa to encode a string
  //     let basicAuthHeaderString = "Basic " + window.btoa( username+":"+password ) // the space after "BASIC " is important
  //     return  basicAuthHeaderString
  // }


  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean' from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.


  // THIS IS THE SECOND ERROR, when we already send the headers with the encoded user and pass in the headers
  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean/path-variable/myuser' from origin 'http://localhost:4200' has been blocked by CORS policy:
  // Response to preflight request doesn't pass access control check: It does not have HTTP ok status.

}
