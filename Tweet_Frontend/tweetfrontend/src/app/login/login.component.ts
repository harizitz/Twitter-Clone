import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetServiceService } from '../service/tweet-service.service';
import { Tweet } from '../tweet-class/tweet';
import { User } from '../user-class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  logincheck: boolean = false;
  str: Tweet = new Tweet();
  constructor(
    private tweetService: TweetServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  logging() {
    if (this.user.email == undefined || this.user.password == undefined) {
      this.logincheck = true;
    } else {
      this.tweetService.login(this.user).subscribe((data) => {
        if (data == null) {
          this.logincheck = true;
        } else {
          this.user = data;
          localStorage.setItem('userid', this.user.user_id.toString());
          localStorage.setItem(
            'username',
            this.user.firstName + ' ' + this.user.lastName
          );
          location.reload();
        }
      });
    }
  }
}
