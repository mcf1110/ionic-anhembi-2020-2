import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public currentValue = 0;
  public maxValue = 0;
  public selectedCash = 0;

  public transactionLog = [];

  public increment() {
    this.currentValue += this.selectedCash;
    if (this.currentValue > this.maxValue) {
      this.maxValue = this.currentValue;
    }
    this.transactionLog.unshift({
      amount: this.selectedCash,
      date: new Date()
    });
    this.selectedCash = 0;
  }

  public decrement() {
    this.currentValue -= this.selectedCash;
    if (this.currentValue < 0) {
      this.currentValue = 0;
    }
    this.transactionLog.unshift({
      amount: -1 * this.selectedCash,
      date: new Date()
    });
    this.selectedCash = 0;
  }

  public reset() {
    this.currentValue = 0;
  }

}
