import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-timer',
  templateUrl: './log-timer.component.html',
  styleUrls: ['./log-timer.component.css']
})
export class LogTimerComponent implements OnInit {
  @Input() noOfStarts :any;
  @Input() noOfPaused : any;
  constructor() { }

  ngOnInit(): void {
  }

}
