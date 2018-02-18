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
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  public list: any[] = [];

  constructor() {
  }

  addToast(newToast: Toast) {
    this.list.push(newToast);
    this.autoRemove(newToast.type === 'error');
  }

  private autoRemove(isError: boolean = false) {
    const timeout = isError ? 4000 : 2000;

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
