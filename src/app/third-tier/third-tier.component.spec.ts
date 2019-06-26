import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTierComponent } from './third-tier.component';

describe('ThirdTierComponent', () => {
  let component: ThirdTierComponent;
  let fixture: ComponentFixture<ThirdTierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdTierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
