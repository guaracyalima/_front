import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelsEditComponent } from './chanels-edit.component';

describe('ChanelsEditComponent', () => {
  let component: ChanelsEditComponent;
  let fixture: ComponentFixture<ChanelsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
