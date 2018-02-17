import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/noauth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthService, AuthGuard, NoAuthGuard],
  declarations: [RegistrationComponent, LoginComponent]
})
export class AuthModule { }
