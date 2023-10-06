import { TestBed } from '@angular/core/testing';

import { TwitsService } from './twits.service';

describe('TwitsService', () => {
  let service: TwitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
