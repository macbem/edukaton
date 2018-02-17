import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: Observable<boolean>;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = Observable.timer(0, 5000).pipe(
      map(() => this.auth.isLoggedIn())
    );
  }
}
