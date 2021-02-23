package com.catrescue.rest.webservices.restfulwebservices.register;

import java.util.Date;

public class UserDataForRegistration {
	
	private Long id ;
	private String firstName;
	
	private String LastName;
	private String eMail;
	private String password;
	private Date creationDate;
	
	
	
	

	// constructor
	public UserDataForRegistration(Long id, String firstName, String lastName, String eMail, String password, Date creationDate) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.LastName = lastName;
		this.eMail = eMail;
		this.password = password;
		this.creationDate = creationDate;
	}
	
	//default constructor
	public UserDataForRegistration() {};
	
	
	// Getters and Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String geteMail() {
		return eMail;
	}
	public void seteMail(String eMail) {
		this.eMail = eMail;
	}
	
	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	
	

}
