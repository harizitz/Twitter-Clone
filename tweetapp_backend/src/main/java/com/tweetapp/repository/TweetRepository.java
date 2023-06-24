package com.tweetapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tweetapp.model.Tweets;

public interface TweetRepository extends JpaRepository<Tweets, Integer> {

	@Query("SELECT t FROM Tweets t WHERE t.user.user_id = ?1")
	List<Tweets> getUserTweets(int user_id);
	
	@Query("SELECT t FROM Tweets t WHERE t.tweet_id = ?1")
	Tweets getTweet(int tweet_id);

}
