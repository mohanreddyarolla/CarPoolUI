import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideBookingComponent } from './ride-booking.component';

describe('RideBookingComponent', () => {
  let component: RideBookingComponent;
  let fixture: ComponentFixture<RideBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
