import { TestBed } from '@angular/core/testing';

import { CaddieService } from './caddie.service';

describe('CaddieService', () => {
  let service: CaddieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaddieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
