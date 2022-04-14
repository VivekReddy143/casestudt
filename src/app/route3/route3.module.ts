import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { LogTimerComponent } from './log-timer/log-timer.component';
import { LogInputTimerComponent } from './log-input-timer/log-input-timer.component';
import { Route3Component } from './route3/route3.component';
import { Route3RoutingModule } from './route3-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TimerComponent,
    TimerInputComponent,
    LogTimerComponent,
    LogInputTimerComponent,
    Route3Component
  ],
  imports: [
    CommonModule,
    Route3RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Route3Module { }
