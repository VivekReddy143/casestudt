import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route4Component } from './route4/route4.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownInputComponent } from './countdown-input/countdown-input.component';
import { CountdownLogComponent } from './countdown-log/countdown-log.component';
import { CountdownTimestampComponent } from './countdown-timestamp/countdown-timestamp.component';
import { Route4RoutingModule } from './route4-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Route4Component,
    CountdownComponent,
    CountdownInputComponent,
    CountdownLogComponent,
    CountdownTimestampComponent
  ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Route4Module { }
