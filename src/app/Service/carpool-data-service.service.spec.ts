import { TestBed } from '@angular/core/testing';

import { CarpoolDataServiceService } from './carpool-data-service.service';

describe('CarpoolDataServiceService', () => {
  let service: CarpoolDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarpoolDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
