import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherRoutingModule } from "./teacher-routing";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { TeacherGuard } from "./teacher.guard";
import { StudentResultComponent } from './student-result/student-result.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TeacherRoutingModule
  ],
  declarations: [
    DashboardComponent,
    StudentResultComponent
  ],
  providers: [
    AuthService,
    TeacherGuard
  ],
  exports: [
    DashboardComponent
  ]
})
export class TeacherModule {}
