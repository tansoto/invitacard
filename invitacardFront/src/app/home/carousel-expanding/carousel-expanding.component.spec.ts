import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselExpandingComponent } from './carousel-expanding.component';

describe('CarouselExpandingComponent', () => {
  let component: CarouselExpandingComponent;
  let fixture: ComponentFixture<CarouselExpandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselExpandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselExpandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
