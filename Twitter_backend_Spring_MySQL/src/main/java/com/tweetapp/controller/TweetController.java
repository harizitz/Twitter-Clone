package com.tweetapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.model.Likes;
import com.tweetapp.model.Reply;
import com.tweetapp.model.Tweets;
import com.tweetapp.model.User;
import com.tweetapp.service.TweetServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/api/v1.0/tweets")
public class TweetController {

	@Autowired
	TweetServiceImpl tweetservice;

	@GetMapping("/users/all")
	public List<User> getAllUsers() {
		return tweetservice.getAllUsers();
	}

	@GetMapping("/all")
	public List<Tweets> getAllTweets() {
		return tweetservice.getTweets();
	}

	@GetMapping("/{userid}")
	public List<Tweets> getAllTweetsOfUser(@PathVariable("userid") int user_id) {
		return tweetservice.getTweetOfUser(user_id);
	}

	@PostMapping("/register")
	public User register(@RequestBody User user) {
		return tweetservice.validateAndSave(user);
	}

	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return tweetservice.validateLogin(user);
	}

	@GetMapping("/{userid}/logout")
	public void logout(@PathVariable("userid") int user_id) {
		tweetservice.logout(user_id);
	}

	@PostMapping("/{userid}/add")
	public void postTweet(@PathVariable("userid") int user_id, @RequestBody Tweets tweet) {
		tweetservice.addTweet(user_id, tweet);
	}

	@PostMapping("/{userid}/reply/{id}")
	public void replyTweet(@RequestBody String reply, @PathVariable("userid") int user_id, @PathVariable("id") int id) {
		tweetservice.replyTweet(user_id, id, reply);
	}

	@GetMapping("/{userid}/like/{id}")
	public void likeTweet(@PathVariable("userid") int user_id, @PathVariable("id") int tweet_id) {
		tweetservice.addLike(user_id, tweet_id);
	}

	@DeleteMapping("/{userid}/delete/{id}")
	public void deleteTweet(@PathVariable("id") int id) {
		tweetservice.deleteTweet(id);
	}
	
	@DeleteMapping("/{userid}/deleteReply/{id}")
	public void deleteReply(@PathVariable("id") int id) {
		tweetservice.deleteReply(id);
	}

	@PutMapping("/{userid}/update/{id}")
	public void updateTweet(@PathVariable("userid") int user_id, @PathVariable("id") int id,
			@RequestBody String newTweet) {
		tweetservice.updateTweet(user_id, id, newTweet);
	}

	@GetMapping("/likes/{userid}")
	public List<Likes> getuserlikes(@PathVariable("userid") int userid) {
		return tweetservice.getUserLikes(userid);
	}
}
