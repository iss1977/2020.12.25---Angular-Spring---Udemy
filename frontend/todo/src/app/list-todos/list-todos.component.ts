import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]; // delcare as array, Init in  ngOnInit()
  // = [
  //   new Todo(1,'Learn to dance', false, new Date()),
  //   new Todo(2,'Expert of dance', false, new Date()),
  //   new Todo(3,'Dance with id 3', false, new Date())
  //   // {id:1 , description:'Learn to dance'},
  //   // {id:2 , description:'Expert of dance'},
  //   // {id:3 , description:'Dance with id 3'}
  // ]

  // todo = {
  //   id: 1,
  //   description : 'Learn to dance'
  // }

  message: string


  constructor(
    private todoService: TodoDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  /**
   * We use this method to load the list of Todos from the Server
   * it will be caled on init and after delete, add, etc....
   */
  refreshTodos() {
    this.todoService.retrieveAllTodos('user01').subscribe(
      (response: Todo[]) => {
        console.log(response)
        this.todos = response;
      }
    )
  }

  // following method is used only to test it in the tamplate.
  methodName(parameters: any): any {
    return { name: 'Test name' };
  }

  deleteTodo(id: number): void {
    console.warn("Article deleted." + id)
    this.todoService.deleteTodo("user01", id).subscribe(
      response => {
        console.log("Response from Server: " + response)
        this.message = `Deleted sucessful! ID:${id}`
        this.refreshTodos()
      },
      error => {
        console.error("Server responded with an ERROR : ")
        console.error(error)
        this.message = "Server responded with an ERROR : " + error.message
        this.refreshTodos()
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
