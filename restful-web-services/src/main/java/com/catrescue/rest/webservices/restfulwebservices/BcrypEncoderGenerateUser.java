package com.catrescue.rest.webservices.restfulwebservices;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class BcrypEncoderGenerateUser {

	public static void main(String[] args) {
		
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			
			for(int i= 0 ; i<10; i++)
				System.out.println(encoder.encode("password"));
		
		// TODO Auto-generated method stub

	}

}
