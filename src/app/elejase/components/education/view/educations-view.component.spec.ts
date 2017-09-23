import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationsViewComponent } from './educations-view.component';

describe('EducationsViewComponent', () => {
  let component: EducationsViewComponent;
  let fixture: ComponentFixture<EducationsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
