import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { TestService } from '../test.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Injectable()
export class QuestionsResolver implements Resolve<any> {
  constructor(private test: TestService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.test.fetchAllQuestions().pipe(
      catchError((err) => {
        console.error(err);
        this.router.navigate(['/']);
        return Observable.empty();
      })
    );
  }
}
