import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagnerGradesComponent } from './wagner-grades.component';

describe('WagnerGradesComponent', () => {
  let component: WagnerGradesComponent;
  let fixture: ComponentFixture<WagnerGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagnerGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WagnerGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
