import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownLogComponent } from './countdown-log.component';

describe('CountdownLogComponent', () => {
  let component: CountdownLogComponent;
  let fixture: ComponentFixture<CountdownLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
