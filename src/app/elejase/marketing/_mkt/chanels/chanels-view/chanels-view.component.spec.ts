import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelsViewComponent } from './chanels-view.component';

describe('ChanelsViewComponent', () => {
  let component: ChanelsViewComponent;
  let fixture: ComponentFixture<ChanelsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
