import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleeperComponent } from './sleeper.component';

describe('SleeperComponent', () => {
  let component: SleeperComponent;
  let fixture: ComponentFixture<SleeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
