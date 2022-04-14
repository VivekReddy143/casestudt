import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css']
})
export class Route6Component implements OnInit {
  @HostListener('scroll', ['$event'])
  totalDivs: any = [];
  out: number = 34;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    for (let i = 0; i < this.out; i++) {
      this.totalDivs.push(i)
    }
  }

  onBtnClick(index: number) {
    alert(index + ' ' + 'Clicked');
  }

  scroll = (event: any): void => {
    const number = event.srcElement.scrollTop;
    console.log(event);
    this.totalDivs.push(this.out++)
  };


}
