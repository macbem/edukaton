import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TestService } from '../../api/test.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public questionsCount: number;
  public testFinished = false;
  public answerSubmitted: boolean;
  public test: any;
  public currentQuestion: number = 0;
  public answers: FormGroup;
  public apiUrl: string;

  constructor(private route: ActivatedRoute, private testService: TestService) {
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.test = this.route.snapshot.data.test;
    this.questionsCount = this.test.questions.length;

    const questionsFormGroup = this.test.questions.reduce((accumulator, value) => ({
      ...accumulator,
      ...{ [value.id]: new FormGroup(this.createAnswersFormGroup(value), questionValidator) }
    }), {});

    this.answers = new FormGroup(questionsFormGroup);
  }

  createAnswersFormGroup(question) {
    return question.answers.reduce((accumulator, value) => ({
      ...accumulator,
      ...{ [value.id]: new FormControl(false) }
    }), {});
  }

  nextQuestion() {
    if (this.currentQuestion + 1 === this.questionsCount) {
      this.handleFormSubmit();
      return;
    }

    this.currentQuestion += 1;
  }

  handleFormSubmit() {
    if (!this.answerSubmitted) {
      this.answerSubmitted = true;
      this.testService.sendAnswers(this.test.id, this.answers.value)
        .toPromise()
        .catch(() => true)
        .then(() => {
          this.testFinished = true;
        });
    }
  }
}

function questionValidator(c: FormGroup) {
   if (!Object.values(c.value).some(value => value)) {
     return {
       selectAtLeastOne: true,
     };
   }

   return null;
}
