import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerSubjectService } from 'src/app/services/timer-subject.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  subscription : Subscription;
  
  interval : any;

  constructor(public timerSerivice : TimerSubjectService) { 
    this.subscription = this.timerSerivice.getData().subscribe(result => {
      if(result){
        this.timerSerivice.counter = result;       
          this.timerSerivice.startCountDown();       
      }else{
    
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  

}
