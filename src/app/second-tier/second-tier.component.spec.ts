import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTierComponent } from './second-tier.component';

describe('SecondTierComponent', () => {
  let component: SecondTierComponent;
  let fixture: ComponentFixture<SecondTierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
