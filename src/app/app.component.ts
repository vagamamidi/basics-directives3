import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaySecret = false;
  logs = [];

  onButtonClick() {
    this.displaySecret = !this.displaySecret;
    this.logs.push(this.logs.length + 1);
  }
}
