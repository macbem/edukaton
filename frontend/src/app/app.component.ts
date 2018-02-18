import {Component, ViewChild} from '@angular/core';
import { fadeAnimation } from "./shared/fade.animation";
import { NavInsideMenuComponent } from "./shared/nav/nav-inside-menu/nav-inside-menu.component";
import {NavComponent} from "./shared/nav/nav.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  @ViewChild('menu') menu: NavInsideMenuComponent;
  @ViewChild('nav') nav: NavComponent;

  title = 'app';
  menuVisible = false;

  constructor() {}

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
