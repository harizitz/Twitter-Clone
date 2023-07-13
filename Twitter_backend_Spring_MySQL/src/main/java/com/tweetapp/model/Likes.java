package com.tweetapp.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "likes")
public class Likes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int like_id;

	@ManyToOne
	@JoinColumn(name = "tweet_id")
	private Tweets tweet;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public Likes() {
		super();
	}

	public int getLike_id() {
		return like_id;
	}

	public Tweets getTweet() {
		return tweet;
	}

	public User getUser() {
		return user;
	}

	public void setLike_id(int like_id) {
		this.like_id = like_id;
	}

	public void setTweet(Tweets tweet) {
		this.tweet = tweet;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Likes(int like_id, Tweets tweet, User user) {
		super();
		this.like_id = like_id;
		this.tweet = tweet;
		this.user = user;
	}

}
