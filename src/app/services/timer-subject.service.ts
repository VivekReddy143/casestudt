import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerSubjectService {
  counter : any;
  interval : any;
  timeBoolean : boolean = false;
  started : number = 0;
  paused : number = 0;
  public subject = new Subject();
  public timerrLog = new Subject();
  constructor() { }

  sendData(data : any){
      this.subject.next(data);
      this.started++;
  }

  getData(){
    return this.subject.asObservable();
  }

  getTimerLog(){
    return this.timerrLog.asObservable();
  }

  startCountDown(){
    this.interval = setInterval(() => {
      if(this.counter > 0){
        this.counter--;
      }else{
        
      }
    }, 1000);
  }

  pauseInterval(){
    clearInterval(this.interval);
  }

}
