import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBoardComponent } from './category-board.component';

describe('CategoryBoardComponent', () => {
  let component: CategoryBoardComponent;
  let fixture: ComponentFixture<CategoryBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
