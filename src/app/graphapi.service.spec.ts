import { TestBed } from '@angular/core/testing';

import { GraphapiService } from './graphapi.service';

describe('GraphapiService', () => {
  let service: GraphapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
