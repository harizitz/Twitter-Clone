import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetServiceService } from '../service/tweet-service.service';
import { Tweet } from '../tweet-class/tweet';
import { User } from '../user-class/user';

@Component({
  selector: 'app-get-user-tweets',
  templateUrl: './get-user-tweets.component.html',
  styleUrls: ['./get-user-tweets.component.css'],
})
export class GetUserTweetsComponent implements OnInit {
  public tweets: Array<Tweet> = [];
  id: number;
  constructor(
    private tweetService: TweetServiceService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('userid'));
    this.getTweets();
  }
  private getTweets() {
    this.tweetService.getAllTweetsOfUser(this.id).subscribe((data) => {
      this.tweets = data;
    });
  }

  updateTweet(tweetid: number) {
    let userid = Number(localStorage.getItem('userid'));
    const index = this.tweets.findIndex((x) => x.tweet_id === tweetid);
    if (this.tweets[index].editstring == null) {
      alert('Please Enter a Tweet');
    } else {
      if (confirm('Are you sure to Update')) {
        this.tweetService
          .update(userid, tweetid, this.tweets[index].editstring)
          .subscribe(() => {
            this.getTweets();
          });
      }
    }
  }

  deleteTweet(tweetid: number) {
    if (confirm('Are you sure to Delete')) {
      let userid = Number(localStorage.getItem('userid'));
      this.tweetService.delete(userid, tweetid).subscribe(() => {
        this.getTweets();
      });
    }
  }

  deleteReply(replyid: number) {
    if (confirm('Are you sure to Delete')) {
      let userid = Number(localStorage.getItem('userid'));
      this.tweetService.deleteReply(userid, replyid).subscribe(() => {
        this.getTweets();
      });
    }
  }
}
