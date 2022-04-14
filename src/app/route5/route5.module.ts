import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route5Component } from './route5/route5.component';
import { Route5RoutingModule } from './route5-routing.module';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    Route5Component
  ],
  imports: [
    CommonModule,
    Route5RoutingModule,
    MatSortModule,
    MatTableModule

  ]
})
export class Route5Module { }
