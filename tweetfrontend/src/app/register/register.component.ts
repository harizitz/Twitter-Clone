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
  gendercheck: boolean = false;
  emailcheck: boolean = false;
  passwordcheck: boolean = false;
  dobcheck: boolean = false;
  date = new Date();
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
  dobchecker() {
    if (this.user.dateOfBirth == undefined) {
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
    if (
      this.firstNameCheck == false &&
      this.lastNameCheck == false &&
      this.gendercheck == false &&
      this.emailcheck == false &&
      this.passwordcheck == false &&
      this.dobcheck == false
    ) {
      this.tweetService.addUser(this.user).subscribe((data) => {
        if (data == null) {
          alert('User already exists, Please Login');
        } else {
          alert('Registered Successfully');
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
