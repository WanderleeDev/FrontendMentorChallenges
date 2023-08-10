import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJobComponent } from './card-job.component';

describe('CardJobComponent', () => {
  let component: CardJobComponent;
  let fixture: ComponentFixture<CardJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardJobComponent]
    });
    fixture = TestBed.createComponent(CardJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
