import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TutorialIntroComponent } from './guide/intro/tutorial-intro/tutorial-intro.component';
import { FakenewsIntroComponent } from './guide/intro/fakenews-intro/fakenews-intro.component';
import { TutorialContainerComponent } from './guide/tutorial-container/tutorial-container.component';
import { FakeNewsSlideContainerComponent } from './guide/slide-containers/fake-news-slide-container/fake-news-slide-container.component';

const studentRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tutorial', component: TutorialContainerComponent, children: [
      { path: 'introduction', component: TutorialIntroComponent },
      { path: '1', component: FakenewsIntroComponent },
      { path: '1/slides', component: FakeNewsSlideContainerComponent },
      { path: '', redirectTo: 'introduction', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule { }
