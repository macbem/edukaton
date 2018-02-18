import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing';
import { SharedModule } from '../shared/shared.module';

import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakenewsIntroComponent } from './guide/intro/fakenews-intro/fakenews-intro.component';
import { FakenewsSlidesComponent } from './guide/slides/fakenews-slides/fakenews-slides.component';
import { CardComponent } from './guide/card/card.component';
import { TutorialContainerComponent } from './guide/tutorial-container/tutorial-container.component';
import { TutorialNavComponent } from './guide/tutorial-nav/tutorial-nav.component';
import { RouterModule } from '@angular/router';
import { FakeNewsSlideContainerComponent } from './guide/slide-containers/fake-news-slide-container/fake-news-slide-container.component';
import { HighlightsSlideComponent } from './guide/slides/highlights-slide/highlights-slide.component';
import { SocialmediaIntroComponent } from './guide/intro/socialmedia-intro/socialmedia-intro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    StudentRoutingModule,
  ],
  declarations: [
    TestComponent,
    DashboardComponent,
    FakenewsIntroComponent,
    FakenewsSlidesComponent,
    CardComponent,
    TutorialContainerComponent,
    TutorialNavComponent,
    FakeNewsSlideContainerComponent,
    HighlightsSlideComponent,
    SocialmediaIntroComponent
  ],
  exports: [
    TestComponent,
    DashboardComponent,
    FakenewsIntroComponent,
    FakenewsSlidesComponent,
    CardComponent
  ]
})
export class StudentModule { }
