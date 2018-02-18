import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/noauth.guard';
import { AuthRoutingModule } from './auth-routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestResolver } from '../api/resolvers/test.resolver';
import { QuestionsResolver } from '../api/resolvers/questions.resolver';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, NoAuthGuard, TestResolver, QuestionsResolver],
  declarations: [RegistrationComponent, LoginComponent]
})
export class AuthModule { }
