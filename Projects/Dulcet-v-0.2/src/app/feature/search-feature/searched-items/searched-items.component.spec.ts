/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedItemsComponent } from './searched-items.component';

describe('SearchedItemsComponent', () => {
  let component: SearchedItemsComponent;
  let fixture: ComponentFixture<SearchedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
