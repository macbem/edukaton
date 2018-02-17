import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NoAuthGuard } from './guards/noauth.guard';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
