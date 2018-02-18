import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericSlideContainer, GenericSlideContainerClass } from '../generic-slide-container';
import { IHighlightPoint } from '../../slides/highlights-slide/highlights-slide.component';

@Component({
  selector: 'app-fake-news-slide-container',
  templateUrl: './fake-news-slide-container.component.html',
  styleUrls: ['./fake-news-slide-container.component.scss']
})
export class FakeNewsSlideContainerComponent extends GenericSlideContainerClass implements GenericSlideContainer {
  public currentSlideId = 0;
  public slidesCount = 3;
  public highlights: IHighlightPoint[] = [
    {
      offsetLeftPercentage: 0,
      offsetTopPercentage: 0,
      height: 20,
      width: 30,
      title: 'sda',
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    super();
  }

  onLastSlideNext() {
    // jak dodamy summary - jak nie, to przechodzi do kolejnej sekcji
    // this.router.navigate(['..', 'summary'], { relativeTo: this.route });
  }
}
