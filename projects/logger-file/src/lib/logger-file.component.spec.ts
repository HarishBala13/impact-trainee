import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerFileComponent } from './logger-file.component';

describe('LoggerFileComponent', () => {
  let component: LoggerFileComponent;
  let fixture: ComponentFixture<LoggerFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggerFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
