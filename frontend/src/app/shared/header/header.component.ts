import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoginPage: Observable<boolean>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoginPage = this.route.url.pipe(
      map(urlSegment => urlSegment[0].path === 'login'),
    );
  }
}
