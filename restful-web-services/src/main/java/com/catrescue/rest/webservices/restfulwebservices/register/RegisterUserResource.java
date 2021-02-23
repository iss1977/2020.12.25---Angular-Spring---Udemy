package com.catrescue.rest.webservices.restfulwebservices.register;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.catrescue.rest.webservices.restfulwebservices.todo.Todo;
import com.catrescue.rest.webservices.restfulwebservices.todo.TodoHardcodedService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RegisterUserResource {
	
	
	@Autowired
    private RegisterUserHardcodedService userService;
	
	@PostMapping("/register")
	public ResponseEntity<Void> createUser(
	    @RequestBody UserDataForRegistration newUser){

		System.out.println(newUser);
		
		// typically we will return in this case a complete url of the created todo
	    // we can achieve this using a helper class :

	    URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
	            .path("/{id}") // we specify what we want to add
	            .buildAndExpand(newUser.getId()).toUri(); // here we specify what the     .path("id")       is gonna be


	    // the result will be Status : 201 and Headers Location will be the created uri
	    return  ResponseEntity.created(uri).build();
	    }


	
	

} // end of class RegisterUserResource
