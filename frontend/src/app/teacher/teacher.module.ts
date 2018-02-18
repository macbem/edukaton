import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherRoutingModule } from "./teacher-routing";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { TeacherGuard } from "./teacher.guard";
import { StudentResultComponent } from './student-result/student-result.component';
import { CreateNewTestComponent } from './create-new-test/create-new-test.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    TeacherRoutingModule
  ],
  declarations: [
    DashboardComponent,
    StudentResultComponent,
    CreateNewTestComponent,
    QuestionComponent
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
