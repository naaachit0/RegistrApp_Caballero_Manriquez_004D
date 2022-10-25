import { TestBed } from '@angular/core/testing';

import { NoIngresadoaGuard } from './no-ingresadoa.guard';

describe('NoIngresadoaGuard', () => {
  let guard: NoIngresadoaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresadoaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
