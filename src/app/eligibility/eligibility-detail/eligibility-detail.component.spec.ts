import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityDetailComponent } from './eligibility-detail.component';

describe('EligibilityDetailComponent', () => {
  let component: EligibilityDetailComponent;
  let fixture: ComponentFixture<EligibilityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
