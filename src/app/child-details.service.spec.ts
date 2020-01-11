import { TestBed } from '@angular/core/testing';

import { ChildDetailsService } from './child-details.service';

describe('ChildDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChildDetailsService = TestBed.get(ChildDetailsService);
    expect(service).toBeTruthy();
  });
});
