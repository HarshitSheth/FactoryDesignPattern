import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerNameComponent } from './passenger-name.component';

describe('PassengerNameComponent', () => {
  let component: PassengerNameComponent;
  let fixture: ComponentFixture<PassengerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
