import {TestBed} from '@angular/core/testing';

import {DidYouLikeService} from './did-you-like.service';

describe('DidYouLikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DidYouLikeService = TestBed.get(DidYouLikeService);
    expect(service).toBeTruthy();
  });
});
