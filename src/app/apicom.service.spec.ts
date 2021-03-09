import { TestBed } from '@angular/core/testing';

import { ApicomService } from './apicom.service';

describe('ApicomService', () => {
  let service: ApicomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
