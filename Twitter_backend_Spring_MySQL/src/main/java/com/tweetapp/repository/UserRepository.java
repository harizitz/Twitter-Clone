package com.tweetapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tweetapp.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("SELECT u FROM User u WHERE u.email = ?1 and u.password = ?2")
	User validateLoginFromDb(String email, String password);

	@Query("SELECT u FROM User u WHERE u.email = ?1")
	User emailExists(String email);
	
	@Query("SELECT u FROM User u WHERE u.username = ?1")
	User usernameExists(String username);

}
