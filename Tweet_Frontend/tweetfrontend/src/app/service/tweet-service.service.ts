import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user-class/user';
import { Tweet } from '../tweet-class/tweet';
import { Reply } from '../reply-class/reply';

@Injectable({
  providedIn: 'root',
})
export class TweetServiceService {
  private baseURL = 'http://localhost:8080/api/v1.0/tweets/';

  constructor(private httpClient: HttpClient) {}
  getAllUsers(): Observable<User[]> {
    console.log('in service');
    return this.httpClient.get<User[]>(`${this.baseURL}` + 'users/all');
  }
  getAllTweets(): Observable<Tweet[]> {
    return this.httpClient.get<Tweet[]>(`${this.baseURL}` + 'all');
  }
  getAllTweetsOfUser(id: number): Observable<Tweet[]> {
    return this.httpClient.get<Tweet[]>(`${this.baseURL}` + id);
  }
  addUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + 'register', user);
  }
  login(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}` + 'login', user);
  }
  logout(userid: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}` + userid + '/' + 'logout');
  }
  addtweet(tweet: Tweet, userid: number): Observable<Tweet> {
    return this.httpClient.post<Tweet>(
      `${this.baseURL}` + userid + '/' + 'add',
      tweet
    );
  }
  getReply(): Observable<Object[]> {
    return this.httpClient.get<Object[]>(`${this.baseURL}` + '/reply/all');
  }
  like(userid: number, tweetid: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}` + userid + '/like/' + tweetid);
  }
  getUserLikes(userid: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}` + 'likes/' + userid);
  }
  addReply(tweetid: number, userid: number, reply: Reply): Observable<Reply> {
    return this.httpClient.post<Reply>(
      `${this.baseURL}` + userid + '/' + 'reply/' + tweetid,
      reply
    );
  }
  update(userid: number, tweetid: number, tweet: Tweet): Observable<any> {
    return this.httpClient.put(
      `${this.baseURL}` + userid + '/' + 'update/' + tweetid,
      tweet
    );
  }
  delete(userid: number, tweetid: number): Observable<any> {
    return this.httpClient.delete(
      `${this.baseURL}` + userid + '/' + 'delete/' + tweetid
    );
  }
}
