import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <h1>Current value of the counter {{counter}}</h1>

<button (click)="increment()">Increment</button>
  `,
})
export class App {
  name = 'Angular';
  counter: number = 0;

  increment() {
    this.counter++;
    console.log(this.counter);
  }
}

bootstrapApplication(App);
