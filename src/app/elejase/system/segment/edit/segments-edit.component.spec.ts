import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsEditComponent } from './segments-edit.component';

describe('SegmentsEditComponent', () => {
  let component: SegmentsEditComponent;
  let fixture: ComponentFixture<SegmentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
