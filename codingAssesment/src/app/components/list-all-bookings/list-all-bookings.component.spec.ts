import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllBookingsComponent } from './list-all-bookings.component';

describe('ListAllBookingsComponent', () => {
  let component: ListAllBookingsComponent;
  let fixture: ComponentFixture<ListAllBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
