import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() counter: any;
  @Input()
  timerStop!: boolean;

  interval : any;
  timeleft : any;
  constructor(private changeRef : ChangeDetectorRef) { }

  ngOnInit(): void {
    
   
  }


   



}
