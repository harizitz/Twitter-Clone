import { Component, OnInit } from '@angular/core';
import { Like } from '../like-class/like';
import { Reply } from '../reply-class/reply';
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
  reply: Reply = new Reply();
  wanttoreply = false;
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
    this.tweetService.like(this.userid, tweetid).subscribe();
    location.reload();
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
    this.tweetService.addReply(tweetid, this.userid, this.reply).subscribe();
    location.reload();
  }
}
