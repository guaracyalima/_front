import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuitorsViewComponent } from './contribuitors-view.component';

describe('ContribuitorsViewComponent', () => {
  let component: ContribuitorsViewComponent;
  let fixture: ComponentFixture<ContribuitorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuitorsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuitorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
