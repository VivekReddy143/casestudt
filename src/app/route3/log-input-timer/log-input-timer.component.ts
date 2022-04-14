import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-input-timer',
  templateUrl: './log-input-timer.component.html',
  styleUrls: ['./log-input-timer.component.css']
})
export class LogInputTimerComponent implements OnInit {
  @Input() timings : any;
  constructor() { }

  ngOnInit(): void {
  }

}
