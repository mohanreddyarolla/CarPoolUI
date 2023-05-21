import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonRideShareFormComponent } from './CommonRideShareForm.component';

describe('Form1Component', () => {
  let component: CommonRideShareFormComponent;
  let fixture: ComponentFixture<CommonRideShareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonRideShareFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonRideShareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
