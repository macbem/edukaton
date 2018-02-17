import { Component } from '@angular/core';

import {
  trigger, state,
  style, transition,
  animate
} from '@angular/animations';

interface Toast {
  title: string;
  msg: string;
  type: 'success' | 'info' | 'error';
}

@Component({
  selector: 'toast',
  template: require('./toast.component.html'),
  styles: [require('./toast.component.scss')],

  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]

})
export class ToastComponent {
  private list: any[] = [];

  constructor() {
  }

  addToast(newToast: Toast) {
    this.list.push(newToast);
    this.autoRemove(newToast.type === 'error');
  }

  private autoRemove(isError: boolean = false) {
    const timeout = isError ? 6000 : 3000;

    if (this.list.length) {
      setTimeout(() => {
        this.list.shift();
      }, timeout);
    }
  }

  private remove(toast) {
    let idx = this.list.indexOf(toast);
    this.list.splice(idx, 1);
  }
}
