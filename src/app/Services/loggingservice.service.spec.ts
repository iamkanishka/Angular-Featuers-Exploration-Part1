import { TestBed } from '@angular/core/testing';

import { LoggingserviceService } from './loggingservice.service';

describe('LoggingserviceService', () => {
  let service: LoggingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
