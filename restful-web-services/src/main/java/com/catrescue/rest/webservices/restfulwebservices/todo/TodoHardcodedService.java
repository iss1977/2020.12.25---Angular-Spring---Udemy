package com.catrescue.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {
    private static List<Todo> todos = new ArrayList<Todo>();
    private static int idCounter = 0;

    static{
        todos.add(new Todo(++idCounter, "user01", "Learn to Dance",new Date(),false));
        todos.add(new Todo(++idCounter, "user01", "Learn about Microservices",new Date(),false));
        todos.add(new Todo(++idCounter, "user01", "Learn Angular",new Date(),false));
        todos.add(new Todo(++idCounter, "user01", "Learn to Dance 2",new Date(),false));
        todos.add(new Todo(++idCounter, "user01", "Learn about Microservices 2",new Date(),false));
        todos.add(new Todo(++idCounter, "user01", "Learn Angular 2",new Date(),false));
        todos.add(new Todo(++idCounter, "user02", "Learn to Dance - user 02",new Date(),false));
        todos.add(new Todo(++idCounter, "user02", "Learn about Microservices - user 02",new Date(),false));
        todos.add(new Todo(++idCounter, "user02", "Learn Angular - user 02",new Date(),false));
        todos.add(new Todo(++idCounter, "user02", "Learn to Dance - user 02 - 2",new Date(),false));
        todos.add(new Todo(++idCounter, "user02", "Learn about Microservices - user 02 - ",new Date(),false));
        todos.add(new Todo(++idCounter, "user02", "Learn Angular - user 02 - 2",new Date(),false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    /**
     * Create a method to save a todo
     * (when calling save in frontend)
     * */
    public Todo save(Todo todo){
        if (todo.getId() == -1 || todo.getId() == 0) { // when we have a new todo, the id will be -1
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);

        }
        return todo;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if (todo == null)
            return null;
        else
            if (todos.remove(todo))
                return todo;
            else
                return null;
    }

    public Todo findById(long id) {
        for (Todo todo: todos){
            if(todo.getId() == id)
                return todo;
        }
        return null;
    }
}
