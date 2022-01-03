import { TestBed } from '@angular/core/testing';

import { BuggyGuard } from './Joueur.guard';

describe('BuggyGuard', () => {
  let guard: BuggyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BuggyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
