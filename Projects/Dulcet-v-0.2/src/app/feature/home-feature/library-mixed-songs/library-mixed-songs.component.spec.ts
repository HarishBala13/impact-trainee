import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMixedSongsComponent } from './library-mixed-songs.component';

describe('LibraryMixedSongsComponent', () => {
  let component: LibraryMixedSongsComponent;
  let fixture: ComponentFixture<LibraryMixedSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryMixedSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryMixedSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
