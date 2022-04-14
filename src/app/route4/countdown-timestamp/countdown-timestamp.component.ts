import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerSubjectService } from 'src/app/services/timer-subject.service';

@Component({
  selector: 'app-countdown-timestamp',
  templateUrl: './countdown-timestamp.component.html',
  styleUrls: ['./countdown-timestamp.component.css']
})
export class CountdownTimestampComponent implements OnInit {
  timeStamp: Subscription;
  timerLog : any = [];
  constructor(private timerService : TimerSubjectService) {
    this.timeStamp = this.timerService.getTimerLog().subscribe(result => {
      if(result){
        this.timerLog.push(result)
      }
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.timeStamp.unsubscribe();
  }

}
