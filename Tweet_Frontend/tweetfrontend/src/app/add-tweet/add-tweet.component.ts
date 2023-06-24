import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetServiceService } from '../service/tweet-service.service';
import { Tweet } from '../tweet-class/tweet';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css'],
})
export class AddTweetComponent implements OnInit {
  tweet: Tweet = new Tweet();
  userid: number;
  tweetcheck: boolean = false;

  constructor(
    private tweetservice: TweetServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  adding() {
    if (
      this.tweet.tweet == undefined ||
      this.tweet.tweet == null ||
      !/^[a-zA-Z]+$/.test(this.tweet.tweet)
    ) {
      this.tweetcheck = true;
    } else {
      this.userid = Number(localStorage.getItem('userid'));
      this.tweetservice.addtweet(this.tweet, this.userid).subscribe();
      alert('Tweet Saved');
      this.router.navigate(['/tweets']);
    }
  }
}
