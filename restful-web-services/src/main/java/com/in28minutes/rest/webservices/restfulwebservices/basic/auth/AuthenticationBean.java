package com.in28minutes.rest.webservices.restfulwebservices.basic.auth;

public class AuthenticationBean {

    //constructor
    public AuthenticationBean(String message) {
        this.message = message;
    }

    public String getMessage() {return message;}
    public void setMessage(String message) {this.message = message;}
    private String message;


    @Override
    public String toString() {
        return "AuthenticationBean{" +
                "message='" + message + '\'' +
                '}';
    }


}
