import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesBoardComponent } from './examples-board.component';

describe('ExamplesBoardComponent', () => {
  let component: ExamplesBoardComponent;
  let fixture: ComponentFixture<ExamplesBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplesBoardComponent]
    });
    fixture = TestBed.createComponent(ExamplesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
