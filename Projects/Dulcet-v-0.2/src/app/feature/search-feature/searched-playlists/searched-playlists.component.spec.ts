/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedPlaylistsComponent } from './searched-playlists.component';

describe('SearchedPlaylistsComponent', () => {
  let component: SearchedPlaylistsComponent;
  let fixture: ComponentFixture<SearchedPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedPlaylistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
