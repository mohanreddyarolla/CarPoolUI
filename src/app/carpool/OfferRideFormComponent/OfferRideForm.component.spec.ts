import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRideFormComponent } from './OfferRideForm.component';

describe('Form2Component', () => {
  let component: OfferRideFormComponent;
  let fixture: ComponentFixture<OfferRideFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferRideFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferRideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
