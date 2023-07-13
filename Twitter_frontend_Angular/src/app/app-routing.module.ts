import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { AuthGuardService } from './auth.guard';
import { GetAllTweetsComponent } from './get-all-tweets/get-all-tweets.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { GetUserTweetsComponent } from './get-user-tweets/get-user-tweets.component';
import { LoginGuardService } from './login.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardService],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuardService],
  },
  {
    path: 'users',
    component: GetAllUsersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'tweets',
    component: GetAllTweetsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'get/:userid',
    component: GetUserTweetsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'addtweet',
    component: AddTweetComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: '/tweets',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/tweets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
