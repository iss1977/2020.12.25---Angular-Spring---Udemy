package com.in28minutes.rest.webservices.restfulwebservices.basic.auth;

public class AuthenticationBean {

	private String message;

	//constructor
	public AuthenticationBean(String message) {
		this.message = message;
	}

	//getters and setters
	public String getMessage() {return message;}
	public void setMessage(String message) {this.message = message;}

	@Override
	public String toString() { return "AuthenticationBean{" + "message='" + message + '\'' +'}';    }

} // end of class AuthenticationBean 
