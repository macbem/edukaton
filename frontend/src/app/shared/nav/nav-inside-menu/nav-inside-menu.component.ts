import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-nav-inside-menu',
  templateUrl: './nav-inside-menu.component.html',
  styleUrls: ['./nav-inside-menu.component.scss']
})
export class NavInsideMenuComponent implements OnInit {
  isMenuActive = false;
  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  toggleNavMenu(state) {
    this.isMenuActive = state;
  }

}
