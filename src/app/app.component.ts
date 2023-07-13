import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="calendar-container">
      <h2>Select a date:</h2>
      <ngb-datepicker [(ngModel)]="selectedDate" (select)="onDateSelect($event)"></ngb-datepicker>
      <p>Selected Date: {{ selectedDate | json }}</p>
    </div>
  `
})
export class AppComponent {
  title = 'assignment';
  selectedDate: NgbDateStruct | undefined;

  constructor(private calendar: NgbCalendar) { }

  onDateSelect(date: NgbDateStruct) {
    // Handle date selection
    console.log(date);
  }
}
