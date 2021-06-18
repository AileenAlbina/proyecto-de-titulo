import { TestBed } from '@angular/core/testing';

import { ProfFuncService } from './prof-func.service';

describe('ProfFuncService', () => {
  let service: ProfFuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfFuncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
