import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideOfferingComponent } from './ride-offering.component';

describe('RideOfferingComponent', () => {
  let component: RideOfferingComponent;
  let fixture: ComponentFixture<RideOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideOfferingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
