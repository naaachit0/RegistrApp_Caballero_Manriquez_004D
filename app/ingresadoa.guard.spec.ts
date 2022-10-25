import { TestBed } from '@angular/core/testing';

import { IngresadoaGuard } from './ingresadoa.guard';

describe('IngresadoaGuard', () => {
  let guard: IngresadoaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
