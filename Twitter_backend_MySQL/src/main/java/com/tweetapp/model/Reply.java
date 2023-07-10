package com.tweetapp.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "reply")
public class Reply {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reply_id;

	private String reply;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "tweet_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private Tweets tweet;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private User user;

	Reply() {
		super();
	}

	public Reply(int reply_id, String reply, Tweets tweet, User user) {
		super();
		this.reply_id = reply_id;
		this.reply = reply;
		this.tweet = tweet;
		this.user = user;
	}

	public int getReply_id() {
		return reply_id;
	}

	public void setReply_id(int reply_id) {
		this.reply_id = reply_id;
	}

	public String getReply() {
		return reply;
	}

	public void setReply(String reply) {
		this.reply = reply;
	}

	
	public void setTweet(Tweets tweet) {
		this.tweet = tweet;
	}

	
	public void setUser(User user) {
		this.user = user;
	}

	public User getUser() {
		return user;
	}
	

}
