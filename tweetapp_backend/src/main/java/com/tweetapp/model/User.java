package com.tweetapp.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;

	private String firstName;
	private String lastName;
	private String gender;
	private String email;
	private String password;
	private String dateOfBirth;
	private String userCreatedTime;
	private Boolean isUserLoggedIn;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Tweets> tweets;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<LoginHistory> loginHistory;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Reply> reply;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Likes> likes;

	public User() {
		super();
	}

	public int getUser_id() {
		return user_id;
	}

	public void setLikes(List<Likes> likes) {
		this.likes = likes;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getUserCreatedTime() {
		return userCreatedTime;
	}

	public void setUserCreatedTime(String userCreatedTime) {
		this.userCreatedTime = userCreatedTime;
	}

	public Boolean getIsUserLoggedIn() {
		return isUserLoggedIn;
	}

	public void setIsUserLoggedIn(Boolean isUserLoggedIn) {
		this.isUserLoggedIn = isUserLoggedIn;
	}

	public void setTweets(List<Tweets> tweets) {
		this.tweets = tweets;
	}

	public void setLoginHistory(List<LoginHistory> loginHistory) {
		this.loginHistory = loginHistory;
	}

	public void setReply(List<Reply> reply) {
		this.reply = reply;
	}

}
