import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsNewComponent } from './segments-new.component';

describe('SegmentsNewComponent', () => {
  let component: SegmentsNewComponent;
  let fixture: ComponentFixture<SegmentsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
