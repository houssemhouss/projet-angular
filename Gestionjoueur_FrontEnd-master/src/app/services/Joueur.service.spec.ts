import { TestBed } from '@angular/core/testing';

import { BuggyService } from './Joueur.service';

describe('BuggyService', () => {
  let service: BuggyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuggyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
