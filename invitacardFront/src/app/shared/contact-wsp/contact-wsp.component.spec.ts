import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWspComponent } from './contact-wsp.component';

describe('ContactWspComponent', () => {
  let component: ContactWspComponent;
  let fixture: ComponentFixture<ContactWspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactWspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactWspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
