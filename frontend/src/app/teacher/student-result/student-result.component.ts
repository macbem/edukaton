import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss']
})
export class StudentResultComponent implements OnInit {
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
