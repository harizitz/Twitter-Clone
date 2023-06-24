import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from '../service/tweet-service.service';
import { User } from '../user-class/user';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css'],
})
export class GetAllUsersComponent implements OnInit {
  public users: Array<User> = [];
  constructor(private tweetService: TweetServiceService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.tweetService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
