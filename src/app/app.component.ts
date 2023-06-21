import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'highcharts';
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Pie chart', content: 'Content 1'},
          {label: 'Column chart', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }
}
