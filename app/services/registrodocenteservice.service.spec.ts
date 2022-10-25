import { TestBed } from '@angular/core/testing';

import { RegistrodocenteserviceService } from './registrodocenteservice.service';

describe('RegistrodocenteserviceService', () => {
  let service: RegistrodocenteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrodocenteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
