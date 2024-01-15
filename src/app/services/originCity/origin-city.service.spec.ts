import { TestBed } from '@angular/core/testing';

import { OriginCityService } from './origin-city.service';

describe('OriginCityService', () => {
  let service: OriginCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OriginCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
