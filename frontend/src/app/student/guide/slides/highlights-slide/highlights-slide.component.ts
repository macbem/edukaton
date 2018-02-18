import {AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
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

@Component({
  selector: 'app-highlights-slide',
  templateUrl: './highlights-slide.component.html',
  styleUrls: ['./highlights-slide.component.scss']
})
export class HighlightsSlideComponent implements OnInit, OnDestroy, AfterViewChecked {
  @Input() highlights: IHighlightPoint[];
  @Input() imageSrc: string;
  @Output('introJsEnd') introJsEnd: EventEmitter<any> = new EventEmitter();
  private introJsInstance: any;
  private viewCheckCount = 0;
  private isIntroInitialized = false;
  private isIntroComplete = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.highlights = this.prepareHighlights(this.highlights);
  }

  ngAfterViewChecked() {
    this.viewCheckCount += 1;
    if (this.viewCheckCount >= 1 && !this.isIntroInitialized) {
      this.isIntroInitialized = true;
      setTimeout((() => { this.initHighlights(); }).bind(this), 300);
    }
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
    return output;
  }

  initHighlights() {
    this.introJsInstance = intro.introJs();
    this.introJsInstance.setOptions({
      steps: this.prepareIntroJsInput(this.highlights),
      exitOnOverlayClick: false,
      hidePrev: true,
      overlayOpacity: 0.1,
      exitOnEsc: false,
      nextLabel: 'Następny',
      prevLabel: 'Poprzedni',
      doneLabel: 'Koniec'
    });

    const exitHandler = (() => {
      if (!this.isIntroComplete) {
        this.isIntroComplete = true;
        this.introJsEnd.emit();
      }
    }).bind(this);

    this.introJsInstance.onexit(exitHandler);
    this.introJsInstance.oncomplete(exitHandler);

    this.introJsInstance.start();
  }

  ngOnDestroy() {
    this.introJsInstance.exit(true);
  }
}
