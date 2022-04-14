import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimestampComponent } from './countdown-timestamp.component';

describe('CountdownTimestampComponent', () => {
  let component: CountdownTimestampComponent;
  let fixture: ComponentFixture<CountdownTimestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimestampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
