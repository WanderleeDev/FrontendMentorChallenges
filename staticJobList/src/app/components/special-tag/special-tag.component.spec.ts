import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTagComponent } from './special-tag.component';

describe('SpecialTagComponent', () => {
  let component: SpecialTagComponent;
  let fixture: ComponentFixture<SpecialTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialTagComponent]
    });
    fixture = TestBed.createComponent(SpecialTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
