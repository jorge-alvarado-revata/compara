import { TestBed } from '@angular/core/testing';

import { ApigraficoService } from './apigrafico.service';

describe('ApigraficoService', () => {
  let service: ApigraficoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigraficoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
