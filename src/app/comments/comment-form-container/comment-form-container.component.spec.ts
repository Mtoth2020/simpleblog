import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormContainerComponent } from './comment-form-container.component';

describe('CommentFormContainerComponent', () => {
  let component: CommentFormContainerComponent;
  let fixture: ComponentFixture<CommentFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
