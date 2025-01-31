package com.field2fork.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.field2fork.dtos.UserDTO;
import com.field2fork.pojos.User;
import com.field2fork.service.UserService;

@RestController
@RequestMapping("/users")

public class UserController {
	
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }
	
	
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody UserDTO userDto) {
	    try {
	        String response = userService.loginUser(userDto.getUsername(), userDto.getPassword());
	        return ResponseEntity.ok(response);
	    } catch (Exception e) {
	        return ResponseEntity.status(401).body("Invalid credentials");
	    }
	}
	
	
	@GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
    
	 @PutMapping("/{id}")
	    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody UserDTO userDto) {
	        return ResponseEntity.ok(userService.updateUser(id, userDto));
	    }
	 
	 
	 @GetMapping("/")
	    public ResponseEntity<List<User>> getAllUsers() {
	        return ResponseEntity.ok(userService.getAllUsers());
	    }

}
