import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../../api/test.service';

@Component({
  selector: 'app-create-new-test',
  templateUrl: './create-new-test.component.html',
  styleUrls: ['./create-new-test.component.scss']
})
export class CreateNewTestComponent implements OnInit {
  public availableQuestions: any[];
  public availableQuestionCategories: string[];
  public selectedQuestions: number[] = [];
  public testName: string = '';

  constructor(
    public snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private testService: TestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.availableQuestions = this.route.snapshot.data['questions'];
    this.availableQuestionCategories = this.availableQuestions.reduce((acc, value) => {
      if (acc.indexOf(value.category.title) === -1) {
        acc.push(value.category.title);
      }

      return acc;
    }, []);
  }

  saveTest() {
    if (!this.selectedQuestions.length) {
      this.snackBar.open('Musisz dodać przynajmniej jedno pytanie.', 'Zamknij', {
        duration: 1000,
      });

      return;
    }

    if (this.testName.length <= 5) {
      this.snackBar.open('Nazwa testu musi mieć przynajmniej pięć znaków.', 'Zamknij', {
        duration: 1000,
      });

      return;
    }

    this.testService.createTest(this.testName, this.selectedQuestions)
      .toPromise()
      .catch(() => {
        this.snackBar.open(
          'Wystąpił problem przy tworzeniu testu. Spróbuj ponownie.',
          'Zamknij',
          {
            duration: 5000,
          }
        );
      })
      .then(test => {
        if (!test) return;

        this.snackBar.open(
          'Test utworzony pomyślnie. Za chwilę zostaniesz przekierowany do panelu nauczyciela.',
          'Zamknij',
          {
            duration: 5000,
          }
        );

        setTimeout((() => { this.router.navigate(['/teacher-dashboard']); }).bind(this), 5000);
      });
  }

  toggleQuestion(questionId: number) {
    if (this.selectedQuestions.indexOf(questionId) === -1) {
      this.selectedQuestions.push(questionId);
    } else {
      this.selectedQuestions = this.selectedQuestions.filter(id => id !== questionId);
    }
  }
}
