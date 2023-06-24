import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  token: string | null;

  constructor(private router: Router) {}

  canActivate(): boolean {
    this.token = window.localStorage.getItem('userid');
    if (this.token !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
