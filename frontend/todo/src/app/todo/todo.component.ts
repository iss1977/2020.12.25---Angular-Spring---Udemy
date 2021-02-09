/**
 * Why? : Want to create a component to add / edit an todo
 * Steps: ng g c todo
 * We want to send the user here from the todo list, when he presses Update
 */


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo = {
    id: 0,
    description: "Hello",
    targetDate: new Date(0),
    done: false
  }

  constructor(
    private todoService: TodoDataService, // dependency injection so I can use The dataService
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log("ngOnInit: getting data for ID:" + this.id)
    this.todo = new Todo(this.id, '', new Date(), false)
    if (this.id > 0)
      this.todoService.retrieveTodo('user01', this.id).subscribe(
        data => this.todo = data,
        error => {
          console.error("!!! Server responded with an ERROR : ")
          console.error(error)
        }
      )
  }

  saveTodo(): void {
    if (this.id <= 0) {
          // create Todo
          this.todoService.createTodo("user01", this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )

    } else {
      this.todoService.updateTodo("user01", this.id, this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
    }
  } //  end of saveTodo()

}
