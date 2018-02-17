import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  burgerActive = false;
  visible = false;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  toggleMenu() {
    this.visible = !this.visible;
    this.toggle.emit(this.visible);
  }

  constructor() { }

  ngOnInit() {
  }

}
