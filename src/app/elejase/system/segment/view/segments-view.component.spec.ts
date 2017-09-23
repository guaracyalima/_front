import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsViewComponent } from './segments-view.component';

describe('SegmentsViewComponent', () => {
  let component: SegmentsViewComponent;
  let fixture: ComponentFixture<SegmentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
