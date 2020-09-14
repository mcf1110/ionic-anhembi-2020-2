import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  public tasks = [
    { name: 'Learn Ionic', completed: false },
    { name: 'Buy Milk', completed: true },
  ];

  public newTask = '';

  public addToList() {
    this.tasks.push({
      name: this.newTask,
      completed: false
    });
    this.newTask = '';
  }

}
