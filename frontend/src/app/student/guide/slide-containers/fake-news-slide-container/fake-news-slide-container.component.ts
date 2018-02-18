import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericSlideContainer, GenericSlideContainerClass } from '../generic-slide-container';

@Component({
  selector: 'app-fake-news-slide-container',
  templateUrl: './fake-news-slide-container.component.html',
  styleUrls: ['./fake-news-slide-container.component.scss']
})
export class FakeNewsSlideContainerComponent extends GenericSlideContainerClass implements GenericSlideContainer {
  public currentSlideId = 0;
  public slidesCount = 2;

  constructor(private router: Router, private route: ActivatedRoute) {
    super();
  }

  onLastSlideNext() {
    // jak dodamy summary - jak nie, to przechodzi do kolejnej sekcji
    // this.router.navigate(['..', 'summary'], { relativeTo: this.route });
  }
}
