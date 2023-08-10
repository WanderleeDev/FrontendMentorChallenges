import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryJobComponent } from './gallery-job.component';

describe('GalleryJobComponent', () => {
  let component: GalleryJobComponent;
  let fixture: ComponentFixture<GalleryJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryJobComponent]
    });
    fixture = TestBed.createComponent(GalleryJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
