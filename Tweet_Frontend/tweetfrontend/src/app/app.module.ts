import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { GetAllTweetsComponent } from './get-all-tweets/get-all-tweets.component';
import { GetUserTweetsComponent } from './get-user-tweets/get-user-tweets.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddTweetComponent,
    GetAllUsersComponent,
    GetAllTweetsComponent,
    GetUserTweetsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
