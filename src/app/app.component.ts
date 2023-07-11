import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'course-project-1';
  clicked: string = 'recipe';

  headerResponse(e) {
    this.clicked = e;
  }
}
