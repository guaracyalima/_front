import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationsEditComponent } from './educations-edit.component';

describe('EducationsEditComponent', () => {
  let component: EducationsEditComponent;
  let fixture: ComponentFixture<EducationsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
