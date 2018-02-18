import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input('index') index: number;
  isAdded = false;

  constructor() { }

  ngOnInit() {
  }

  addToTest() {
    this.isAdded = true;
  }

  removeFromTest() {
    this.isAdded = false;
  }
}
