import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityPageComponent } from './eligibility-page.component';

describe('EligibilityPageComponent', () => {
  let component: EligibilityPageComponent;
  let fixture: ComponentFixture<EligibilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
