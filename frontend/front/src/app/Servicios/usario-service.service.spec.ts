import { TestBed } from '@angular/core/testing';

import { UsarioServiceService } from './usario-service.service';

describe('UsarioServiceService', () => {
  let service: UsarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
