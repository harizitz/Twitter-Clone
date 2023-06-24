package com.tweetapp.model;

import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name = "login_history")
public class LoginHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int history_id;

	private String email;
	private Date login_time;
	private Date logout_time;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	public LoginHistory() {
		super();
	}

	public LoginHistory(int history_id, String email, Date login_time, Date logout_time, User user) {
		super();
		this.history_id = history_id;
		this.email = email;
		this.login_time = login_time;
		this.logout_time = logout_time;
		this.user = user;
	}

	public int getHistory_id() {
		return history_id;
	}

	public void setHistory_id(int history_id) {
		this.history_id = history_id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getLogin_time() {
		return login_time;
	}

	public void setLogin_time(Date login_time) {
		this.login_time = login_time;
	}

	public Date getLogout_time() {
		return logout_time;
	}

	public void setLogout_time(Date logout_time) {
		this.logout_time = logout_time;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}