import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-nav-inside-menu',
  templateUrl: './nav-inside-menu.component.html',
  styleUrls: ['./nav-inside-menu.component.scss']
})
export class NavInsideMenuComponent implements OnInit {
  @Input('menuVisible') menuVisible: boolean;
  @Output() onLinkClick: EventEmitter<boolean> = new EventEmitter();

  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  toggleNavMenu(state) {
    this.menuVisible = state;
  }

  hideMenu() {
    this.menuVisible = false;
    this.onLinkClick.emit(this.menuVisible);
  }

}
