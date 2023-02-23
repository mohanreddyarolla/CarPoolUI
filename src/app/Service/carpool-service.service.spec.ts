import { TestBed } from '@angular/core/testing';

import { CarpoolServiceService } from '../Service/carpool-service.service';

describe('CarpoolServiceService', () => {
  let service: CarpoolServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarpoolServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
