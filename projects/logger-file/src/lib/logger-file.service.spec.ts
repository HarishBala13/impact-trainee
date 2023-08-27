import { TestBed } from '@angular/core/testing';

import { LoggerFileService } from './logger-file.service';

describe('LoggerFileService', () => {
  let service: LoggerFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
