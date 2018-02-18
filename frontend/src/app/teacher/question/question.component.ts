import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input('index') index: number;
  @Input('question') question: any;
  @Output('toggleQuestion') toggleQuestion: EventEmitter<number> = new EventEmitter();
  isAdded = false;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addToTest() {
    this.isAdded = true;
    this.snackBar.open('Pytanie zostało dodane.', 'Zamknij', {
      duration: 1000,
    });

    this.toggleQuestion.emit(this.question.id);
  }

  removeFromTest() {
    this.isAdded = false;
    this.snackBar.open('Pytanie zostało usunięte.', 'Zamknij', {
      duration: 1000,
    });

    this.toggleQuestion.emit(this.question.id);
  }
}
