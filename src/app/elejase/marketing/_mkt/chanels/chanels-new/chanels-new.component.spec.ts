import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelsNewComponent } from './chanels-new.component';

describe('ChanelsNewComponent', () => {
  let component: ChanelsNewComponent;
  let fixture: ComponentFixture<ChanelsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
