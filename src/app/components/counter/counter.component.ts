import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
  
  constructor() { }

  ngOnInit() {
    this.countDown(new Date('Jun 6, 2018'))
  }

  public countDown (date: Date) {
    setInterval(_ => {
      const left = date.getTime() - new Date().getTime();
      this.days = Math.floor(left / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((left % (1000 * 60)) / 1000);
    }, 1000);
  }
}
