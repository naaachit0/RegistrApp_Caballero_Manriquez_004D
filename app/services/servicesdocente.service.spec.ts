import { TestBed } from '@angular/core/testing';

import { ServicesdocenteService } from './servicesdocente.service';

describe('ServicesdocenteService', () => {
  let service: ServicesdocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesdocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
