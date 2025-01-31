package com.field2fork.service;

import java.util.List;

import com.field2fork.dtos.UserDTO;
import com.field2fork.pojos.User;

public interface UserService {

	String registerUser(User user);

	String loginUser(String username, String password);

	User getUserById(Long id);

	String updateUser(Long id, UserDTO userDto);

	List<User> getAllUsers();

}
