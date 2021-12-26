import { TestBed } from '@angular/core/testing';

import { ConditionDataService } from './condition-data.service';

describe('ConditionDataService', () => {
  let service: ConditionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
