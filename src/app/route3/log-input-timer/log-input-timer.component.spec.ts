import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInputTimerComponent } from './log-input-timer.component';

describe('LogInputTimerComponent', () => {
  let component: LogInputTimerComponent;
  let fixture: ComponentFixture<LogInputTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInputTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInputTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
