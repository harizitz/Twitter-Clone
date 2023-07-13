package com.tweetapp.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tweetapp.model.Likes;
import com.tweetapp.model.Reply;
import com.tweetapp.model.Tweets;
import com.tweetapp.model.User;
import com.tweetapp.repository.LikeRepository;
import com.tweetapp.repository.ReplyRepository;
import com.tweetapp.repository.TweetRepository;
import com.tweetapp.repository.UserRepository;

@Transactional
@Service
public class TweetServiceImpl implements TweetService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	TweetRepository tweetRepository;

	@Autowired
	ReplyRepository replyRepository;

	@Autowired
	LikeRepository likeRepository;

	@Override
	public User validateAndSave(User user) {
		User emailExists = userRepository.emailExists(user.getEmail());
		if (emailExists != null) {
			return null;
		}
		user.setUserCreatedTime(new Date().toString());
		user.setIsUserLoggedIn(false);
		userRepository.save(user);
		return user;
	}

	@Override
	public void addTweet(int user_id, Tweets tweet) {
		User user = new User();
		user.setUser_id(user_id);
		tweet.setUser(user);
		if (tweet.getTweet() != null) {
			tweetRepository.save(tweet);
		}
	}

	@Override
	public void replyTweet(int user_id, int tweet_id, String reply) {
		User user = new User();
		user.setUser_id(user_id);

		Tweets tweet = new Tweets();
		tweet.setTweet_id(tweet_id);
		Reply postReply=new Reply();
		postReply.setTweet(tweet);
		postReply.setUser(user);
		postReply.setReply(reply);
		replyRepository.save(postReply);

	}

	@Override
	public void updateTweet(int user_id, int tweet_id, String updatedTweet) {

		Tweets tweetfromdb = tweetRepository.findById(tweet_id).get();
		tweetfromdb.setTweet(updatedTweet);

		tweetRepository.save(tweetfromdb);

	}

	@Override
	public User validateLogin(User user) {
		User userfromdb = userRepository.validateLoginFromDb(user.getEmail(), user.getPassword());
		if (userfromdb != null) {
			userfromdb.setIsUserLoggedIn(true);
			userRepository.save(userfromdb);
			return userfromdb;
		}
		return userfromdb;
	}

	@Override
	public void logout(int user_id) {
		userRepository.updateStatus(user_id);
	}

	@Override
	public void addLike(int user_id, int tweet_id) {
		Likes existing = likeRepository.existing(user_id, tweet_id);
		if (existing == null) {
			User user = new User();
			user.setUser_id(user_id);

			Tweets tweet = new Tweets();
			tweet.setTweet_id(tweet_id);

			Likes like = new Likes();
			like.setTweet(tweet);
			like.setUser(user);
			likeRepository.save(like);
		} else {
			likeRepository.deleteif(tweet_id);
		}
	}

	@Override
	public List<Tweets> getTweets() {
		return tweetRepository.findAll();
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public List<Tweets> getTweetOfUser(int user_id) {
		return tweetRepository.getUserTweets(user_id);
	}

	@Override
	public User getUser(int user_id) {
		return userRepository.findById(user_id).get();
	}

	@Override
	public void deleteTweet(int id) {
		tweetRepository.deleteById(id);
	}
	
	@Override
	public void deleteReply(int id) {
		replyRepository.deleteById(id);
	}

	@Override
	public List<Likes> getUserLikes(int userid) {
		List<Likes> findUserlike = likeRepository.findUserlike(userid);
		return findUserlike;
	}

}
