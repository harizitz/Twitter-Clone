package com.tweetapp.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tweets")
public class Tweets {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tweet_id;

	private String tweet;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private User user;

	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@OneToMany(mappedBy = "tweet", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Reply> reply;

	@OneToMany(mappedBy = "tweet", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Likes> likes;

	public Tweets() {
		super();
	}

	public Tweets(int tweet_id, String tweet, User user, List<Reply> reply, List<Likes> likes) {
		super();
		this.tweet_id = tweet_id;
		this.tweet = tweet;
		this.user = user;
		this.reply = reply;
		this.likes = likes;
	}

	public int getTweet_id() {
		return tweet_id;
	}

	public User getUser() {
		return user;
	}

	public void setTweet_id(int tweet_id) {
		this.tweet_id = tweet_id;
	}

	public void setTweet(String tweet) {
		this.tweet = tweet;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getTweet() {
		return tweet;
	}

	public void setReply(List<Reply> reply) {
		this.reply = reply;
	}

	public void setLikes(List<Likes> likes) {
		this.likes = likes;
	}

	public List<Reply> getReply() {
		return reply;
	}
	
	

}
