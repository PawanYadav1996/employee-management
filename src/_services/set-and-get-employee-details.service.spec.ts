import { TestBed } from '@angular/core/testing';

import { SetAndGetEmployeeDetailsService } from './set-and-get-employee-details.service';

describe('SetAndGetEmployeeDetailsService', () => {
  let service: SetAndGetEmployeeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetAndGetEmployeeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
