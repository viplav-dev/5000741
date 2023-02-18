import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieBookingComponent } from './add-movie-booking.component';

describe('AddMovieBookingComponent', () => {
  let component: AddMovieBookingComponent;
  let fixture: ComponentFixture<AddMovieBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovieBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
