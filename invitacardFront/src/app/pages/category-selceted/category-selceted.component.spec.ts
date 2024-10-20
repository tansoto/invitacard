import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySelcetedComponent } from './category-selceted.component';

describe('CategorySelcetedComponent', () => {
  let component: CategorySelcetedComponent;
  let fixture: ComponentFixture<CategorySelcetedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorySelcetedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorySelcetedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
