import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component implements OnInit {
  counter : number =100;
  timings : any = [];
  noOfStarts : number = 0;
  noOfPaused : number = 0;
  timerStop: boolean = false;
  interval : any;
  timeleft : any;
  constructor() { }

  ngOnInit(): void {
    this.startCountdown(this.counter)
  }

  startCountdown(seconds: number) {
    this.counter = seconds;
     
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

  inputEmitter(timer : any){
    console.log(timer)
    let date = new Date();
    if(timer){
      this.counter = timer;
      clearInterval(this.interval)
      this.startCountdown(this.counter)
      this.timings.push('Start Timing is '+ date);
      this.noOfStarts++;
    }else{
      this.pauseInterval();
      this.timings.push('Pause Timing is '+ date)

    }
    
  }

  pauseEmitter(timeBoolean : boolean){
    let date = new Date();
    if(timeBoolean == true){
      this.timings.push('Pause Timing is '+ date);
      this.noOfPaused++;
      this.pauseInterval();
    }
    
  }

}
