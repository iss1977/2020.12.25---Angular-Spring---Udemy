package com.in28minutes.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

    // method to return Hello World


    @RequestMapping(method= RequestMethod.GET, path="/hello-world")
    public String helloWorld(){
        return "<h1>Hello World</h1>";
    }

    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        //throw new RuntimeException("Some error happend. Contact support.");
        return new HelloWorldBean("<h1>Hello World</h1>");
    }

    @GetMapping(path="/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("<h1>Hello World %s</h1>",name));
    }

}
