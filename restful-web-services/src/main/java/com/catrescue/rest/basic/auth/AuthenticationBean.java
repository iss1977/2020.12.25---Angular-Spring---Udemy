/*We moved this package  
 * from com.in28minutes.rest.webservices.restufulwebservices.basic.auth
 * to com.in28minutes.rest.basic.auth
 * 
 * This way we disable the containing class because thei are not picked up by springboot.
 * Only classes in com.in28minutes.rest.webservices.restufulwebservices.* will be picked up and used.
 * 
 * */
package com.catrescue.rest.basic.auth;

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
