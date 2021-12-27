import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAssessmentHomeComponent } from './risk-assessment-home.component';

describe('RiskAssessmentHomeComponent', () => {
  let component: RiskAssessmentHomeComponent;
  let fixture: ComponentFixture<RiskAssessmentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskAssessmentHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskAssessmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
