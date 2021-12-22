import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityConditionsComponent } from './eligibility-conditions.component';

describe('EligibilityConditionsComponent', () => {
  let component: EligibilityConditionsComponent;
  let fixture: ComponentFixture<EligibilityConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
