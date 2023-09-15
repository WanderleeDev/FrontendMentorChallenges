import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLocationComponent } from './box-location.component';

describe('BoxLocationComponent', () => {
  let component: BoxLocationComponent;
  let fixture: ComponentFixture<BoxLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxLocationComponent]
    });
    fixture = TestBed.createComponent(BoxLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
