package com.in28minutes.rest.basic.auth;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {

//  this methods are double, but code is ok
//    @RequestMapping(method= RequestMethod.GET, path="/hello-world")
//    public String helloWorld(){
//        return "<h1>Hello World</h1>";
//    }
//
//    @GetMapping(path="/hello-world-bean")
//    public AuthenticationBean helloWorldBean(){
//        //throw new RuntimeException("Some error happend. Contact support.");
//        return new AuthenticationBean("<h1>Hello World</h1>");
//    }

//    @GetMapping(path="/hello-world-bean/path-variable/{name}")
//    public AuthenticationBean helloWorldPathVariable(@PathVariable String name){
//        return new AuthenticationBean(String.format("<h1>Hello World %s</h1>",name));
//    }


    @GetMapping(path="/basicauth")
    public AuthenticationBean helloWorldBean(){
        //throw new RuntimeException("Some error happend. Contact support.");
        return new AuthenticationBean("You are authenticated.");
    }



    //Added extra, not in course included. It will be called from static index.html
    @GetMapping("/hello")
    public String sayHello(@RequestParam(value = "myName", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

}
