import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaAutoplayComponent } from './galleria-autoplay.component';

describe('GalleriaAutoplayComponent', () => {
  let component: GalleriaAutoplayComponent;
  let fixture: ComponentFixture<GalleriaAutoplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleriaAutoplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleriaAutoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
