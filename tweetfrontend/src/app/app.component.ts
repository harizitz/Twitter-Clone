import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TweetServiceService } from './service/tweet-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tweet App';
  canShowNav = false;
  userid: number;
  present: string | null;
  username: string | null;

  ngOnInit(): void {
    this.present = localStorage.getItem('userid');
    this.userid = Number(localStorage.getItem('userid'));
    if (this.present !== null) {
      this.canShowNav = true;
    }
    this.username = localStorage.getItem('username');
  }

  logout() {
    if (confirm('Are you sure to Logout ')) {
      this.tweetservice
        .logout(Number(localStorage.getItem('userid')))
        .subscribe();
      localStorage.removeItem('userid');
      localStorage.removeItem('username');
      location.reload();
    }
  }

  constructor(
    private tweetservice: TweetServiceService,
    private router: Router
  ) {}
}
