import { TestBed } from '@angular/core/testing';

import { HmspushService } from './hmspush.service';

describe('HmspushService', () => {
  let service: HmspushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmspushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
