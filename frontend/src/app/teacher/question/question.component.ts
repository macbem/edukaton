import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input('index') index: number;
  isAdded = false;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addToTest() {
    this.isAdded = true;
    this.snackBar.open('Pytanie zostało dodane.', 'Zamknij', {
      duration: 1000,
    });
  }

  removeFromTest() {
    this.isAdded = false;
    this.snackBar.open('Pytanie zostało usunięte.', 'Zamknij', {
      duration: 1000,
    });
  }
}
