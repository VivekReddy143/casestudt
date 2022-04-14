import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'

export interface Students {
  Name: string;
  Class: string;
  Section: string;
  Maths: number;
  Physics: number;
  English: number;
  Hindi: number;
  Biology: number;
  Social: number;
}



@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css']
})

export class Route5Component implements OnInit {
  public sortOrder = 1;
  private collater = new Intl.Collator(undefined, {
    numeric : true,
    sensitivity : "base"
  })
  keys :any = [];
  students: any = [
    { Name: '001', Class: '01', Section: 'A', Maths: 24, Physics: 23, English: 25, Hindi: 16, Biology: 20, Social: 17 },
    { Name: '002', Class: '01', Section: 'B', Maths: 22, Physics: 22, English: 21, Hindi: 15, Biology: 23, Social: 21 },
    { Name: '003', Class: '01', Section: 'A', Maths: 14, Physics: 25, English: 22, Hindi: 23, Biology: 17, Social: 18 },
    { Name: '004', Class: '01', Section: 'C', Maths: 20, Physics: 23, English: 24, Hindi: 24, Biology: 23, Social: 21 },
    { Name: '005', Class: '01', Section: 'A', Maths: 17, Physics: 17, English: 21, Hindi: 22, Biology: 12, Social: 21 },
    { Name: '006', Class: '01', Section: 'D', Maths: 19, Physics: 16, English: 20, Hindi: 24, Biology: 23, Social: 20 },
    { Name: '007', Class: '01', Section: 'C', Maths: 20, Physics: 23, English: 21, Hindi: 20, Biology: 13, Social: 22 },
    { Name: '008', Class: '01', Section: 'A', Maths: 18, Physics: 18, English: 15, Hindi: 19, Biology: 22, Social: 21 },
    { Name: '009', Class: '01', Section: 'B', Maths: 23, Physics: 23, English: 16, Hindi: 24, Biology: 23, Social: 25 },
    { Name: '010', Class: '01', Section: 'A', Maths: 24, Physics: 19, English: 18, Hindi: 18, Biology: 24, Social: 17 }

  ];


  // students: any = [
  //   { Name: '001', Class: '01', Section: 'A', Maths: 24, },
  //   { Name: '002', Class: '01', Section: 'B', Maths: 22, },
  //   { Name: '003', Class: '01', Section: 'A', Maths: 14, },
  //   { Name: '004', Class: '01', Section: 'C', Maths: 20,  },
  //   { Name: '005', Class: '01', Section: 'A', Maths: 17, },
  //   { Name: '006', Class: '01', Section: 'D', Maths: 19, },
  //   { Name: '007', Class: '01', Section: 'C', Maths: 20, },
  //   { Name: '008', Class: '01', Section: 'A', Maths: 18,  },
  //   { Name: '009', Class: '01', Section: 'B', Maths: 23, },
  //   { Name: '010', Class: '01', Section: 'A', Maths: 24, }

  // ];
  objectKeys : any;

  sortedData: Students[];
  

  constructor() {
    this.sortedData = this.students.slice();
    this.objectKeys = Object.keys(this.sortedData[0]);
    console.log(this.objectKeys)
  }
  ngOnInit(): void {
    

  }

  startSort(_property: any, _order: any, _type = ""){
    if(_order === "desc"){
      this.sortOrder = -1;
    }
    return (a: any,b: any) => {
      return this.collater.compare(a[_property], b[_property]) * this.sortOrder
    }
  }

  sortData(sort: Sort) {
    const data = this.students.slice();

    
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a : any, b : any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Name':
          return this.compare(a.Name, b.Name, isAsc);
        case 'Class':
          return this.compare(a.Class, b.Class, isAsc);
        case 'Section':
          return this.compare(a.Section, b.Section, isAsc);
        case 'Maths':
          return this.compare(a.Maths, b.Maths, isAsc);
        case 'Physics':
          return this.compare(a.Physics, b.Physics, isAsc);
        case 'English':
          return this.compare(a.English, b.English, isAsc);
        case 'Hindi':
          return this.compare(a.Hindi, b.Hindi, isAsc);
        case 'Biology':
          return this.compare(a.Biology, b.Biology, isAsc);
        case 'Social':
          return this.compare(a.Social, b.Social, isAsc);
        default:
          return 0;
      }
    });
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
