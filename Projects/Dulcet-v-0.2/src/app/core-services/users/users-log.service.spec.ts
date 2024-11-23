import { TestBed } from '@angular/core/testing';

import { UsersLogService } from './users-log.service';

describe('UsersLogService', () => {
  let service: UsersLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
