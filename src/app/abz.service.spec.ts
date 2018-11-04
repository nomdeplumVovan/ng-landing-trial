import { TestBed, inject } from '@angular/core/testing';

import { AbzService } from './abz.service';

describe('AbzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbzService]
    });
  });

  it('should be created', inject([AbzService], (service: AbzService) => {
    expect(service).toBeTruthy();
  }));
});
