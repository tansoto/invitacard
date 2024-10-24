import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCircularComponent } from './carousel-circular.component';

describe('CarouselCircularComponent', () => {
  let component: CarouselCircularComponent;
  let fixture: ComponentFixture<CarouselCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselCircularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
