import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,'Learn to dance', false, new Date()),
    new Todo(2,'Expert of dance', false, new Date()),
    new Todo(3,'Dance with id 3', false, new Date())
    // {id:1 , description:'Learn to dance'},
    // {id:2 , description:'Expert of dance'},
    // {id:3 , description:'Dance with id 3'}
  ]
  todo = {
    id: 1,
    description : 'Learn to dance'
  }
  constructor() { }

  ngOnInit(): void {
  }

  // following method is used only to test it in the tamplate.
  methodName(parameters: any): any {
    return {name: 'Test name'};
  }

}
