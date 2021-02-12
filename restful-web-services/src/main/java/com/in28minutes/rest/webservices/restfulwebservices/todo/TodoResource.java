package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoService;

    @GetMapping("/users/{user_name}/todos")
    public ResponseEntity<List<Todo>> getAllTodos(@PathVariable("user_name") String username){
        List<Todo> tempTodos = todoService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(tempTodos);
        //return todoService.findAll(); // this was in the learn video originally
    }

    @GetMapping("/users/{user_name}/todos/{id}")
    public ResponseEntity<Todo> getTodo(@PathVariable("user_name") String username,  @PathVariable("id") long id){
        Todo tempTodo = todoService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(tempTodo);
        //return todoService.findAll(); // this was in the learn video originally
    }

    @DeleteMapping("/users/{user_name}/todos/{todo_id}")
    public ResponseEntity<String> deleteTodo(@PathVariable String user_name, @PathVariable("todo_id") long id){
        Todo deletedTodo =todoService.deleteById(id) ;
        String message;
        if (deletedTodo!=null){
            message = String.format("Article was deleted. ID = %s ; DESC= %s", deletedTodo.getId(), deletedTodo.getDescription());
            //return ResponseEntity.status(HttpStatus.OK).body(message); // this gets an error on frontend by parsing.
            return ResponseEntity.noContent().build(); // it will return status 200 with no content if successfully deleted.
        } else {
            message = String.format("!!! The requested Todo can not be found !!! (possible deletion by other user?)");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message); // it will return status 400 if not found
        }
    }


//    Edit/Update a Todo
//    PUT /users/{user_name}/todos/{todo_id}
// is used to edit a todo
    @PutMapping("/users/{user_name}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String user_name,
            @PathVariable("id") long id,
            @RequestBody Todo todo){
    Todo todoUpdated =  todoService.save(todo);
    return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }
//
//    Add a Todo
//    POST /users/{user_name}/todos/
//
@PostMapping("/users/{user_name}/todos")
public ResponseEntity<Void> createTodo(
        @PathVariable String user_name,
        @RequestBody Todo todo){
    Todo createdTodo = todoService.save(todo);
    // typically we will return in this case a complete url of the created todo
    // we can achieve this using a helper class :

    URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}") // we specify what we want to add
            .buildAndExpand(createdTodo.getId()).toUri(); // here we specify what the     .path("id")       is gonna be


    // the result will be Status : 201 and Headers Location will be the created uri
    return  ResponseEntity.created(uri).build();
    }


} // end of public class TodoResource
