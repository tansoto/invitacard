import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleCarruselComponent } from './doble-carrusel.component';

describe('DobleCarruselComponent', () => {
  let component: DobleCarruselComponent;
  let fixture: ComponentFixture<DobleCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DobleCarruselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DobleCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
