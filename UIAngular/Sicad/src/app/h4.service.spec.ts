import { TestBed } from '@angular/core/testing';

import { H4Service } from './h4.service';

describe('H4Service', () => {
  let service: H4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(H4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
