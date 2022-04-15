package com.app.service;

import java.util.List;
import java.util.Set;

import com.app.dto.SignUpRequest;
import com.app.dto.UserDetailsResponse;
import com.app.dto.UserResponseDTO;
import com.app.pojos.Flat;
import com.app.pojos.Role;

//Nothing to do with spring security : it's job currently is user registration
public interface IUserService {
	
	UserResponseDTO registerUser(SignUpRequest request);
	UserDetailsResponse showUser(String userName);
	String getRoles(String userName);
	void deleteUser(String userName);
}
