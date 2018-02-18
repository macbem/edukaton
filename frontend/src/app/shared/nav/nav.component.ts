import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input('menuVisible') menuVisible: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  burgerActive = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    this.toggle.emit(this.menuVisible);
  }

  xyz(state) {
    this.menuVisible = state;
  }

  constructor() { }

  ngOnInit() {
  }

}
