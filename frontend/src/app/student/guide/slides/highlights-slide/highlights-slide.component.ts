import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import * as intro from 'intro.js';

export interface IHighlightPoint {
  offsetLeftPercentage: number;
  offsetTopPercentage: number;
  height: number;
  width: number;
  step?: number;
  title: string;
  selector?: number;
}

export interface IIntroJsInput {
  element: HTMLElement;
  intro: string;
}

declare global {
  interface Window { intro: any; }
}

@Component({
  selector: 'app-highlights-slide',
  templateUrl: './highlights-slide.component.html',
  styleUrls: ['./highlights-slide.component.scss']
})
export class HighlightsSlideComponent implements OnInit, OnDestroy {
  @Input() highlights: IHighlightPoint[];
  @Input() imageSrc: string;
  private introJsInstance: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.highlights = this.prepareHighlights(this.highlights);
    window.intro = intro;
  }

  ngAfterViewInit() {
    this.initHighlights();
  }

  prepareHighlights(highlights: IHighlightPoint[]): IHighlightPoint[] {
    return highlights.map((item: IHighlightPoint, index: number) => ({
      ...item,
      selector: index
    }));
  }

  prepareIntroJsInput(highlights: IHighlightPoint[]) {
    var output = highlights.map(el => ({
      intro: el.title,
      element: this.elementRef.nativeElement.querySelector(`[data-intro-el="${ el.selector }"]`),
    }));
    console.log(this.elementRef.nativeElement.querySelector('[data-intro-el="0"]'));
    console.log(output);
    return output;
  }

  initHighlights() {
    this.introJsInstance = intro.introJs();
    this.introJsInstance.setOptions({
      steps: this.prepareIntroJsInput(this.highlights)
    });

    this.introJsInstance.start();
  }

  ngOnDestroy() {
    this.introJsInstance.exit(true);
  }
}
