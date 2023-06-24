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
  editopen: boolean = true;
  newtweet: Tweet = new Tweet();
  constructor(
    private tweetService: TweetServiceService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['userid'];
    this.getTweets();
  }
  private getTweets() {
    this.tweetService.getAllTweetsOfUser(this.id).subscribe((data) => {
      this.tweets = data;
    });
  }

  updateTweet(tweetid: number) {
    if (confirm('Are you sure to Update')) {
      let userid = Number(localStorage.getItem('userid'));
      this.tweetService.update(userid, tweetid, this.newtweet).subscribe();
      location.reload();
    }
  }

  deleteTweet(tweetid: number) {
    if (confirm('Are you sure to Delete')) {
      let userid = Number(localStorage.getItem('userid'));
      this.tweetService.delete(userid, tweetid).subscribe();
      location.reload();
    }
  }
}
