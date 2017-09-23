import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationsEditComponent } from './occupations-edit.component';

describe('OccupationsEditComponent', () => {
  let component: OccupationsEditComponent;
  let fixture: ComponentFixture<OccupationsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
