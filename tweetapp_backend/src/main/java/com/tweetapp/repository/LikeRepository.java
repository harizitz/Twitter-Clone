package com.tweetapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.tweetapp.model.Likes;

public interface LikeRepository extends JpaRepository<Likes, Integer> {

	@Query("SELECT l FROM Likes l WHERE l.user.user_id = ?1 and l.tweet.tweet_id=?2")
	Likes existing(int user_id,int tweet_id);
	
	@Modifying
	@Query("delete from Likes l WHERE l.tweet.tweet_id=?1")
	void deleteif(int tweet_id);
	
	@Query("SELECT l FROM Likes l WHERE l.user.user_id = ?1")
	List<Likes> findUserlike(int user_id);
}
