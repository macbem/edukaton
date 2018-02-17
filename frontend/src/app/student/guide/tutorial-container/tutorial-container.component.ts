import { Component } from '@angular/core';
import { ICategory } from '../tutorial-nav/tutorial-nav.component';

@Component({
  selector: 'app-tutorial-container',
  templateUrl: './tutorial-container.component.html',
  styleUrls: ['./tutorial-container.component.scss']
})
export class TutorialContainerComponent {
  public categories: ICategory[] = [{
    id: 'introduction',
    name: 'Wprowadzenie',
  }, {
    id: '1',
    name: 'Fake News'
  }];

  constructor() {}
}

