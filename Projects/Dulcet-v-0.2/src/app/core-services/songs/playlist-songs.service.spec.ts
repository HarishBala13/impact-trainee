import { TestBed } from '@angular/core/testing';

import { PlaylistSongsService } from './playlist-songs.service';

describe('PlaylistSongsService', () => {
  let service: PlaylistSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
