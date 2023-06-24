import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardService implements CanActivate {
  token: string | null;

  constructor(private router: Router) {}

  canActivate(): boolean {
    this.token = window.localStorage.getItem('userid');
    if (this.token !== null) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
