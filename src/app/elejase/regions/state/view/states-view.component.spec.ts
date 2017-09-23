import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesViewComponent } from './states-view.component';

describe('StatesViewComponent', () => {
  let component: StatesViewComponent;
  let fixture: ComponentFixture<StatesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
