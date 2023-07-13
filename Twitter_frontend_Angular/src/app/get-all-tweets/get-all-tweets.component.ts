import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Like } from '../like-class/like';
import { TweetServiceService } from '../service/tweet-service.service';
import { Tweet } from '../tweet-class/tweet';

@Component({
  selector: 'app-get-all-tweets',
  templateUrl: './get-all-tweets.component.html',
  styleUrls: ['./get-all-tweets.component.css'],
})
export class GetAllTweetsComponent implements OnInit {
  public tweets: Array<Tweet> = [];
  userid: number;
  likes: Like[];
  tweetlike: Number[] = [];
  constructor(private tweetService: TweetServiceService) {}

  ngOnInit(): void {
    this.getTweets();
    this.getUserLikes();
  }

  private getTweets() {
    this.tweetService.getAllTweets().subscribe((data) => {
      this.tweets = data;
    });
  }

  likeit(tweetid: number) {
    this.userid = Number(localStorage.getItem('userid'));
    if (this.tweetlike.indexOf(tweetid) >= 0) {
      delete this.tweetlike[this.tweetlike.indexOf(tweetid)];
    } else {
      this.tweetlike.push(tweetid);
    }
    this.tweetService.like(this.userid, tweetid).subscribe();
  }

  getUserLikes() {
    this.userid = Number(localStorage.getItem('userid'));
    this.tweetService.getUserLikes(this.userid).subscribe((data) => {
      this.likes = data;
      this.likes.map((item) => {
        this.tweetlike.push(item.tweet.tweet_id);
      });
    });
  }
  replytweet(tweetid: number) {
    this.userid = Number(localStorage.getItem('userid'));
    const index = this.tweets.findIndex((x) => x.tweet_id === tweetid);
    if (this.tweets[index].replystring == null) {
      alert('Please Enter a Reply');
    } else {
      this.tweetService
        .addReply(tweetid, this.userid, this.tweets[index].replystring)
        .subscribe(() => {
          this.tweets[index].replycheck = false;
          this.getTweets();
        });
    }
  }
}
