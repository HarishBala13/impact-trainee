import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTopSongsComponent } from './library-top-songs.component';

describe('LibraryTopSongsComponent', () => {
  let component: LibraryTopSongsComponent;
  let fixture: ComponentFixture<LibraryTopSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryTopSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryTopSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
