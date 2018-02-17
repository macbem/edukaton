import {Component, ViewChild} from '@angular/core';
import { fadeAnimation } from "./shared/fade.animation";
import {ActivatedRoute} from '@angular/router';
import { Observable } from "rxjs/Observable";
import {map, tap} from "rxjs/operators";
import {Location} from "@angular/common";
import {NavInsideMenuComponent} from "./shared/nav/nav-inside-menu/nav-inside-menu.component";

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

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // this.isRouteLogin = this.location.path() === 'login' || this.location.path() === 'registration';
    // console.log(this.isRouteLogin)
    //
    // this.location.subscribe(location => {
    //   this.isRouteLogin = location.url === 'login' || location.url === 'registration';
    //   console.log(location)
    // })
    //
    // console.log(this.route);
  }

  getRouterOutletState(outlet) {
    console.log(outlet)
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
