import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkjoin';
import { catchError, map, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class TestService {
  private cachedTestData = [];
  private cachedAnswers = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchAllTestData(1);
  }

  getSpecificTest(testId: number) {
    return this.http.get(`${environment.apiUrl}/api/tests/${testId}`);
  }

  getAllTestsAsTeacher() {
    return this.http.get(`${environment.apiUrl}/api/tests`);
  }

  getAllAvailableQuestions() {
    return this.http.get(`${environment.apiUrl}/api/tests/questions`);
  }

  getAllAvailableCategories() {
    return this.http.get(`${environment.apiUrl}/api/categories`);
  }

  sendAnswers(testId: number, answers: any[]) {
    return this.http.post(`${environment.apiUrl}/api/tests/${testId}/submit`, {
      answers: this.serializeAnswers(answers)
    }).pipe(
      catchError(() => Observable.of('no score')),
      map(this.calculateScore)
    );
  }

  calculateScore(response) {
    if (!response) {
      return 'no score';
    }

    const questionsCount = response.question_ids.length;
    const correctlyAnsweredCount = response.submission.questions.filter(question => question.is_correct);

    return Math.floor(correctlyAnsweredCount / questionsCount * 100);
  }

  fetchAllTestsData() {
    return forkJoin([
      this.getAllTestsAsTeacher(),
      this.getAllAvailableQuestions(),
      this.getAllAvailableCategories()
    ]).pipe(
      map(this.mapTestsData),
      tap(testsData => this.cachedTestData)
    );
  }

  fetchAllTestData(testId: number) {
    return forkJoin([
      this.getSpecificTest(testId),
      this.getAllAvailableQuestions(),
      this.getAllAvailableCategories()
    ]).pipe(
      map(this.mapTestData),
      tap(testData => {
       const testIndex = this.cachedTestData.findIndex(test => testData.id === test.id);

       if (testIndex !== -1) {
        this.cachedTestData.push(testData);
       } else {
         this.cachedTestData[testIndex] = testData;
       }
      })
    );
  }

  getCachedTestData() {
    return this.cachedTestData;
  }

  setCachedTestData(testData) {
    this.cachedTestData = testData;
  }

  getCachedAnswers() {
    return this.cachedAnswers;
  }

  setCachedAnswers(answers) {
    this.cachedAnswers = answers;
  }

  serializeAnswers(answers) {
    const serializedAnswers = [];
    const answersKeyValueMap = Object.keys(answers).forEach(question => {
      Object.entries(answers[question]).forEach(([answerId, answer]) => {
        if (!answer) return;

        serializedAnswers.push({
          question_id: question,
          answer_id: answerId
        })
      });
    });

    return serializedAnswers;
  }

  mapTestsData([tests, questions, categories]) {
    questions = questions.data.map(question => ({
      ...question,
      category: categories.data.find(entry => entry.id === question.category_id)
    }));

    return tests.data.map(testData => ({
      ...testData,
      questions: testData.question_ids.map(id => questions.find(entry => entry.id === id)),
    }));
  }

  mapTestData([testData, questions, categories]) {
    questions = questions.data.map(question => ({
      ...question,
      category: categories.data.find(entry => entry.id === question.category_id)
    }));

    return {
      ...testData,
      questions: testData.question_ids.map(id => questions.find(entry => entry.id === id)),
    };
  }
}
