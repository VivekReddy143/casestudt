import { Component, OnInit } from '@angular/core';
import { TimerSubjectService } from 'src/app/services/timer-subject.service';

@Component({
  selector: 'app-countdown-input',
  templateUrl: './countdown-input.component.html',
  styleUrls: ['./countdown-input.component.css']
})
export class CountdownInputComponent implements OnInit {
  timerInput : any;
  constructor(private timerService : TimerSubjectService) { }

  ngOnInit(): void {
    this.timerService.sendData(100);
  }
  getEmit() {
    if(!this.timerInput && this.timerService.timeBoolean == true){
      this.timerInput = this.timerService.counter
    }

    if(this.timerInput){
      this.timerService.pauseInterval();
      this.timerService.sendData(this.timerInput);
      this.timerService.timeBoolean = false;
      this.timerInput = '';
      this.timerService.timerrLog.next('Starting at'+ new Date());
    }else{
      this.timerService.timeBoolean = true;
      this.timerService.pauseInterval();
      this.timerService.paused++
      this.timerService.timerrLog.next('Paused at'+ new Date());
    }
  }

}
