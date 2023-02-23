import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideMatchingCardComponent } from './ride-matching-card.component';

describe('RideMatchingCardComponent', () => {
  let component: RideMatchingCardComponent;
  let fixture: ComponentFixture<RideMatchingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideMatchingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideMatchingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
