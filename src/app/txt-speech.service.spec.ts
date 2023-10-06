import { TestBed } from '@angular/core/testing';

import { TxtSpeechService } from './txt-speech.service';

describe('TxtSpeechService', () => {
  let service: TxtSpeechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TxtSpeechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
