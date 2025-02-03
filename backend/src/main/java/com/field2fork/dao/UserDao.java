package com.field2fork.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.field2fork.pojos.User;

public interface UserDao extends JpaRepository<User, Long> {
	Optional<User> findById(Long id);
}
