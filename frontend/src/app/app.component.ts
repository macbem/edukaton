import {Component, ViewChild} from '@angular/core';
import { fadeAnimation } from "./shared/fade.animation";
import { NavInsideMenuComponent } from "./shared/nav/nav-inside-menu/nav-inside-menu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  @ViewChild('menu') menu: NavInsideMenuComponent;
  title = 'app';
  isRouteLogin: any;

  constructor() {}

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
