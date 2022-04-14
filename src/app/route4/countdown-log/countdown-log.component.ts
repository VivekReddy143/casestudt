import { Component, OnInit } from '@angular/core';
import { TimerSubjectService } from 'src/app/services/timer-subject.service';

@Component({
  selector: 'app-countdown-log',
  templateUrl: './countdown-log.component.html',
  styleUrls: ['./countdown-log.component.css']
})
export class CountdownLogComponent implements OnInit {

  sampleArray : any = ['name1','name2','name3']

  constructor(public timeService : TimerSubjectService) { }

  ngOnInit(): void {
  }

}
