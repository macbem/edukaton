import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      return true;
    }

    if (this.auth.isTeacher()) {
      this.router.navigate(['/teacher']);
    } else {
      this.router.navigate(['/dashboard']);
    }

    return false;
  }
}
