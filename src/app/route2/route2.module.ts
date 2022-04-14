import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route2Component } from './route2/route2.component';
import { Route2RoutingModule } from './route2-routing.module';



@NgModule({
  declarations: [
    Route2Component
  ],
  imports: [
    CommonModule,
    Route2RoutingModule
  ]
})
export class Route2Module { }
