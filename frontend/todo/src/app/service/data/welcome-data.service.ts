import {HttpClient} from '@angular/common/http';
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


  executeHelloWorldBeanServiceWithPathVariable(name: string): any {
    return (this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`))
    // console.log("Execute Hello World Bean Service.");
  }
}
