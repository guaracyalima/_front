import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationsNewComponent } from './occupations-new.component';

describe('OccupationsNewComponent', () => {
  let component: OccupationsNewComponent;
  let fixture: ComponentFixture<OccupationsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
