import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedinvitationsComponent } from './featuredinvitations.component';

describe('FeaturedinvitationsComponent', () => {
  let component: FeaturedinvitationsComponent;
  let fixture: ComponentFixture<FeaturedinvitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedinvitationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedinvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
