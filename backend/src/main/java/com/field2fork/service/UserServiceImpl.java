package com.field2fork.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import com.field2fork.dao.UserDao;
import com.field2fork.dtos.UserDTO;
import com.field2fork.pojos.User;



@Service
@Transactional

public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	   @Autowired
	   private PasswordEncoder passwordEncoder; 
	   
	   
	
	@Override
	public String registerUser(User user) {
        if (userDao.existsByUsername(user.getUsername())) {
            return "Username already taken!";
        }
        
        
        user.setPassword(passwordEncoder.encode(user.getPassword()));
       
        if (user.getActiveStatus() == null) {
            user.setActiveStatus(true);
        }

        userDao.save(user);
        return "User registered successfully!";
    }


	
	 @Override
	 public String loginUser(String username, String password) {
	        Optional<User> user = userDao.findByUsername(username);
	        
	       
	        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
	            return "Login successful!";
	        } else {
	            return "Invalid username or password!";
	        }
	    }



	@Override
	 public User getUserById(Long id) {
        return userDao.findById(id).orElseThrow(() -> new RuntimeException("User not found!"));
    }



	@Override
	  public String updateUser(Long id, UserDTO userDto) {
        User user = getUserById(id);
        user.setEmail(userDto.getEmail());
        user.setLocation(userDto.getLocation());
        user.setContactNumber(userDto.getContactNumber());
        user.setAddress(userDto.getAddress());
        userDao.save(user);
        return "User updated successfully!";
    }



	
	 @Override
	    public List<User> getAllUsers() {
	        return userDao.findAll();
	    }
	
	
	

}
