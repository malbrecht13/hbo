import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskRecsComponent } from './risk-recs.component';

describe('RiskRecsComponent', () => {
  let component: RiskRecsComponent;
  let fixture: ComponentFixture<RiskRecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskRecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskRecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
