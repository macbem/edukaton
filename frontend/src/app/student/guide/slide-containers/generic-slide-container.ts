export interface GenericSlideContainer {
  currentSlideId: number;
  slidesCount: number;
  next: () => void;
  prev: () => void;
  isFirstSlide: () => boolean;
  isLastSlide: () => boolean;
  onLastSlideNext?: () => void;
}

export abstract class GenericSlideContainerClass {
  public currentSlideId = 0;
  public slidesCount = 2;

  next() {
    if (this.isLastSlide()) {
      this.onLastSlideNext();
    } else {
      // we can do some fadeOut on the current slide here
      this.currentSlideId += 1;
    }
  }

  onLastSlideNext() {}

  prev() {
    if (!this.isFirstSlide()) {
      this.currentSlideId -= 1;
    }
  }

  isFirstSlide() {
    return this.currentSlideId === 0;
  }

  isLastSlide() {
    return this.currentSlideId === this.slidesCount - 1;
  }
}
