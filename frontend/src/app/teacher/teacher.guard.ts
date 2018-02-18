import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class TeacherGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(): boolean {
    if (this.auth.isTeacher()) {
      return true
    } else {
      return false;
    }
  }
}
