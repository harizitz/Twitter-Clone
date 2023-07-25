import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetServiceService } from '../service/tweet-service.service';
import { User } from '../user-class/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  firstNameCheck: boolean = false;
  lastNameCheck: boolean = false;
  usernameCheck: boolean = false;
  gendercheck: boolean = false;
  emailcheck: boolean = false;
  passwordcheck: boolean = false;
  dobcheck: boolean = false;
  available: boolean = false;
  usern: string;
  date = new Date().toISOString().slice(0, 10);
  constructor(
    private tweetService: TweetServiceService,
    private router: Router
  ) {}

  firstNamechecker() {
    if (
      this.user.firstName == undefined ||
      this.user.firstName.length < 3 ||
      this.user.firstName.length > 20 ||
      !/^[a-zA-Z]+$/.test(this.user.firstName)
    ) {
      this.firstNameCheck = true;
    } else {
      this.firstNameCheck = false;
    }
  }
  lastNamechecker() {
    if (
      this.user.lastName == undefined ||
      this.user.lastName.length < 1 ||
      !/^[a-zA-Z]+$/.test(this.user.lastName)
    ) {
      this.lastNameCheck = true;
    } else {
      this.lastNameCheck = false;
    }
  }

  genderchecker() {
    if (this.user.gender == undefined) {
      this.gendercheck = true;
    } else {
      this.gendercheck = false;
    }
  }

  emailchecker() {
    if (
      this.user.email == undefined ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.email)
    ) {
      this.emailcheck = true;
    } else {
      this.emailcheck = false;
    }
  }
  passwordchecker() {
    var pattern = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$'
    );
    if (
      this.user.password == undefined ||
      !pattern.test(this.user.password) ||
      this.user.password.length < 8
    ) {
      this.passwordcheck = true;
    } else {
      this.passwordcheck = false;
    }
  }
  usernamechecker() {
    if (
      this.user.username == undefined ||
      !/^[a-zA-Z-+_!@#$%^&*.,?]+$/.test(this.user.username)
    ) {
      this.usernameCheck = true;
      this.available = false;
    } else {
      this.tweetService.checkusername(this.user.username).subscribe((data) => {
        if (data != null) {
          this.usernameCheck = true;
          this.available = false;
        } else {
          this.usernameCheck = false;
          this.available = true;
        }
      });
    }
  }

  dobchecker() {
    if (
      this.user.dateOfBirth == undefined ||
      this.user.dateOfBirth >= this.date
    ) {
      this.dobcheck = true;
    } else {
      this.dobcheck = false;
    }
  }

  ngOnInit(): void {}
  onSubmit() {
    this.firstNamechecker();
    this.lastNamechecker();
    this.genderchecker();
    this.emailchecker();
    this.passwordchecker();
    this.dobchecker();
    this.usernamechecker();
    if (
      this.firstNameCheck == false &&
      this.lastNameCheck == false &&
      this.gendercheck == false &&
      this.emailcheck == false &&
      this.passwordcheck == false &&
      this.dobcheck == false &&
      this.usernameCheck == false
    ) {
      this.tweetService.addUser(this.user).subscribe((data) => {
        if (data == null) {
          alert('User already exists, Please Login');
        } else {
          alert('Registered Successfully. Please Login');
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
