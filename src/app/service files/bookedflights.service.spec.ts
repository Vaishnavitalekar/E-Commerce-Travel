import { TestBed } from '@angular/core/testing';

import { BookedflightsService } from './bookedflights.service';

describe('BookedflightsService', () => {
  let service: BookedflightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookedflightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
