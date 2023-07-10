package com.tweetapp.service;

import java.util.Collection;
import java.util.List;

import org.springframework.stereotype.Service;

import com.tweetapp.model.Likes;
import com.tweetapp.model.Reply;
import com.tweetapp.model.Tweets;
import com.tweetapp.model.User;

@Service
public interface TweetService {

	public User validateAndSave(User user);

	public void addTweet(int user_id, Tweets tweet);

	public void replyTweet(int user_id, int tweet_id, Reply reply);

	public void updateTweet(int user_id, int tweet_id, Tweets tweet);

	public User validateLogin(User user);
	
	public void logout(int user_id);

	public void addLike(int user_id, int tweet_id);

	public List<Tweets> getTweets();

	public List<User> getAllUsers();

	public Collection<Tweets> getTweetOfUser(int user_id);

	public String forgotPassword(int user_id);

	public User getUser(int user_id);

	public void deleteTweet(int id);

	public List<Likes> getUserLikes(int userid);

}
