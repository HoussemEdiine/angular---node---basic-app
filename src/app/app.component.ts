import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn-app';
  counter: number = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    
    this.counter--;
  }
  reset() {
    this.counter = 0;
  }
  
}
