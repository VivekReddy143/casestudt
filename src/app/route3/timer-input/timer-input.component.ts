import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.css']
})
export class TimerInputComponent implements OnInit {
  timerInput: any;
  timerStop : any;
  msg = '';
  @Input() counter : any;
  @Output() timer = new EventEmitter();
  @Output() pauseTimer = new EventEmitter();
  intervalTime : any = [];
  constructor() { }

  ngOnInit(): void {
  }

  getEmit() {
    if(this.timerStop && !this.timerInput){
      this.timerInput = this.timerStop
    }

    if (this.timerInput) {
      this.timer.emit(this.timerInput);
      this.intervalTime.push('Start Timer at'+' '+this.timerInput);
      this.timerInput = '';
      this.timerStop = '';
      this.pauseTimer.emit(false);
    }else{
      this.pauseTimer.emit(true);
      this.timerStop = this.counter;
      this.intervalTime.push('Pause Timer at'+' '+this.timerStop );
    }

  }

  reset(){
    this.timer.emit(60);

    this.intervalTime.push('Reseted time at'+' '+ 60);
    this.timerInput = '';
    this.timerStop = '';
    this.pauseTimer.emit(false);
  }

  getVal(ob: EventTarget | null) {
    return (<HTMLInputElement>ob).value;
  }

}
