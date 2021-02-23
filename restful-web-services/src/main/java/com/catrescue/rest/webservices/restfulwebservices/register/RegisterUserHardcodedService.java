package com.catrescue.rest.webservices.restfulwebservices.register;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.catrescue.rest.webservices.restfulwebservices.todo.Todo;

@Service
public class RegisterUserHardcodedService {
	private static List<UserDataForRegistration> users = new ArrayList<UserDataForRegistration>();
    private static int idCounter = 0;

    static{
        users.add(new UserDataForRegistration((long)++idCounter, "Firstname", "Lastname","user@domain.com", "password", new Date()));
    }


}
