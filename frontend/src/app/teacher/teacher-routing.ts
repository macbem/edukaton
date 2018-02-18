import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateNewTestComponent } from "./create-new-test/create-new-test.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionsResolver } from '../api/resolvers/questions.resolver';

const teacherRoutes: Routes = [
  {
    path: 'teacher-dashboard',
    component: DashboardComponent
  },
  {
    path: 'tests/create',
    component: CreateNewTestComponent,
    resolve: {
      questions: QuestionsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(teacherRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherRoutingModule { }
