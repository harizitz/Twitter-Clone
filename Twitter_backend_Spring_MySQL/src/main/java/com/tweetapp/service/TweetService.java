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
	
	public User validateUsername(String username);

	public void addTweet(int user_id, Tweets tweet);

	public void replyTweet(int user_id, int tweet_id, String reply);

	public void updateTweet(int user_id, int tweet_id, String editTweet);

	public User validateLogin(User user);

	public void addLike(int user_id, int tweet_id);

	public List<Tweets> getTweets();

	public List<User> getAllUsers();

	public Collection<Tweets> getTweetOfUser(int user_id);

	public User getUser(int user_id);

	public void deleteTweet(int id);
	
	public void deleteReply(int id);

	public List<Likes> getUserLikes(int userid);

}
