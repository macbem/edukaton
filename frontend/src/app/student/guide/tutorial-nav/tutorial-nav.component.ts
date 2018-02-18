import { Component, Input } from '@angular/core';

export interface ICategory {
  name: string;
  id: number | string;
}

@Component({
  selector: 'app-tutorial-nav',
  templateUrl: './tutorial-nav.component.html',
  styleUrls: ['./tutorial-nav.component.scss']
})
export class TutorialNavComponent {
  @Input() categories: ICategory[];
  @Input() stepName: string;
}
