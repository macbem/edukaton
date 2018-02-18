import { Component } from '@angular/core';
import { ICategory } from '../tutorial-nav/tutorial-nav.component';
import {fadeAnimation} from "../../../shared/fade.animation";

@Component({
  selector: 'app-tutorial-container',
  templateUrl: './tutorial-container.component.html',
  styleUrls: ['./tutorial-container.component.scss'],
  animations: [fadeAnimation]
})
export class TutorialContainerComponent {
  public categories: ICategory[] = [{
    id: '1',
    name: 'Fake News',
  }, {
    id: '2',
    name: 'Social Media'
  }];

  constructor() {}

  getRouterOutletState(outlet) {
    console.log(outlet)
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}

