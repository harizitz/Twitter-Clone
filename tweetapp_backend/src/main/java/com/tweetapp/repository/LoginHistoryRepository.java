package com.tweetapp.repository;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.tweetapp.model.LoginHistory;

public interface LoginHistoryRepository extends JpaRepository<LoginHistory, Integer> {
	
	@Transactional
	@Modifying
	@Query("UPDATE LoginHistory l SET l.logout_time = ?1 where l.user.user_id=?2")
	void setLogout(Date date,int user_id);

}
