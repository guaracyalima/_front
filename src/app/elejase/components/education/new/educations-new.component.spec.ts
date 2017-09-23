import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationsNewComponent } from './educations-new.component';

describe('EducationsNewComponent', () => {
  let component: EducationsNewComponent;
  let fixture: ComponentFixture<EducationsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
