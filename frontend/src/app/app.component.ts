import {Component, ViewChild} from '@angular/core';
import { fadeAnimation } from "./shared/fade.animation";
import { NavInsideMenuComponent } from "./shared/nav/nav-inside-menu/nav-inside-menu.component";
import {NavComponent} from "./shared/nav/nav.component";
import {NavigationEnd, Router} from "@angular/router";

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

  constructor(private router: Router) {}

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        window.scrollTo(0, 0)

        return;
      }
      window.scrollTo(0, 0)
    });
  }

  move
}
